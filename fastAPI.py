import os
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

# Your existing imports and setup
from utils.readkey import set_env
set_env()

# Importing langchain related modules
from langchain.agents import Tool, AgentExecutor, LLMSingleActionAgent, AgentOutputParser
from langchain.prompts import StringPromptTemplate
from langchain import OpenAI, LLMChain
from langchain.tools import DuckDuckGoSearchRun
from langchain.schema import AgentAction, AgentFinish
from langchain.chat_models import ChatOpenAI
from utils.tools import duck
from recommender.template import CustomPromptTemplate, CustomOutputParser
from prompts.system_template import REACT_TEMPLATE
from recommender.recommender_system import Recommender

# FastAPI app setup
app = FastAPI()

# CORS middleware setup for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for request body
class ChatRequest(BaseModel):
    user_input: Optional[str] = None

# Your existing setup for langchain, tools, and agent
tools = [
    Tool(
        name="Search WebMD",
        func=duck,
        description="Useful for answering medical and pharmacological questions"
    )
]

output_parser = CustomOutputParser()

prompt = CustomPromptTemplate(
            template=REACT_TEMPLATE,
            tools=tools,
            input_variables=["input", "intermediate_steps"]
        )

llm = ChatOpenAI(model="gpt-4", temperature=0, openai_api_key=os.environ["OPENAI_API_KEY"])
llm_chain = LLMChain(llm=llm, prompt=prompt)
tool_names = [tool.name for tool in tools]

agent = LLMSingleActionAgent(
    llm_chain=llm_chain,
    output_parser=output_parser,
    stop=["\nObservation:"],
    allowed_tools=tool_names
)

agent_executor = AgentExecutor.from_agent_and_tools(agent=agent, tools=tools, verbose=True)
rec = Recommender()
rec.agent_exec(agent_executor)

# Endpoint for chat interaction
@app.post("/chat/")
async def chat_endpoint(chat_request: ChatRequest):
    try:
        user_input = chat_request.user_input
        if user_input:
            # Use the agent_executor to process the user input
            response = agent_executor.run(user_input)
            return JSONResponse(content={"response": response})
        else:
            return JSONResponse(content={"response": "No input received."})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)