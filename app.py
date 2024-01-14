import os
import re
import gradio as gr
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
from recommender.recommender_system import Recommender

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

rec = Recommender()

# Greeting message for the chatbot
greeting = """
Hello, and I hope you're feeling alright today! My role is to assist you with any health-related concerns. 
Could you let me know if you're experiencing any discomfort, pain, or symptoms of illness? 
It's important to remember that while I can provide general health advice, I'm not a substitute for professional medical care. 
If you believe you are facing a medical emergency, please don't hesitate to call 911 and visit the nearest hospital immediately. 
For other health concerns, feel free to share details, and I'll do my best to assist you.
"""

rec.agent_exec(agent_executor)

# def respond_to_input(user_input):
#     # Use the agent_executor to process the user input
#     response = agent_executor.run(user_input)

#     # Format the response as a list of tuples [(user_input, response)]
#     chat_history = [(user_input, response)]

#     # Return the formatted chat history
#     return chat_history

with gr.Blocks() as demo:
    gr.Markdown('# Health Advisor Agent')
    gr.Markdown(greeting)
    with gr.Row():
        with gr.Column():
            chatbot = gr.Chatbot()
            msg = gr.Textbox(label="Your Problems")
            clear = gr.ClearButton([msg, chatbot])

        # When the user submits their message, process it and update the chatbot
        msg.submit(rec.respond_to_input, inputs=msg, outputs=[msg, chatbot])

# Launch the Gradio app
demo.launch()