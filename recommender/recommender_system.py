# recommender_system.py
import os
import sys
from utils.readkey import set_env
set_env()

from langchain.chains import LLMChain
from langchain.memory import ConversationBufferMemory
from langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate, MessagesPlaceholder
from langchain.schema import SystemMessage
from langchain.chat_models import ChatOpenAI
from prompts.system_template import PERSONA_TEMPLATE

class Recommender:
    def __init__(self):
        self.openai_api_key = os.environ["OPENAI_API_KEY"]
        self.llm = ChatOpenAI(model="gpt-4", temperature=0, openai_api_key=self.openai_api_key)
        self.llm_feedback = None
        self.prompt = self.create_prompt_template()
        self.memory = self.initialize_memory()

    def create_prompt_template(self):
        return ChatPromptTemplate.from_messages([
            SystemMessage(content=PERSONA_TEMPLATE),
            MessagesPlaceholder(variable_name="chat_history"),
            HumanMessagePromptTemplate.from_template("{human_input}")
        ])

    def initialize_memory(self):
        return ConversationBufferMemory(memory_key="chat_history", return_messages=True)

    def create_llm_chain(self):
        return LLMChain(
            llm=self.llm,
            prompt=self.prompt,
            verbose=True,
            memory=self.memory,
        )

    def respond(self, message, chat_history):
        chat_llm_chain = self.create_llm_chain()
        response = chat_llm_chain.predict(human_input=message)
        chat_history.append((message, response))
        return "", chat_history