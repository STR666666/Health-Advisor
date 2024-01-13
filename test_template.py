import os
import re
from typing import List, Union
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

# Set up the tools available to the agent
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

# Setup for the agent and its execution
output_parser = CustomOutputParser()
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

# Running the agent
agent_executor.run("How can I treat a sprained ankle?")