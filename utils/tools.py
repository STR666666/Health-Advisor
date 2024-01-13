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

# Define tool for searching on WebMD using DuckDuckGo
def duck_wrapper(input_text):
    search_results = search.run(f"site:webmd.com {input_text}")
    return search_results

# Set up the tools available to the agent
search = DuckDuckGoSearchRun()
tools = [
    Tool(
        name="Search WebMD",
        func=duck_wrapper,
        description="Useful for answering medical and pharmacological questions"
    )
]