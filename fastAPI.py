import os
import gradio as gr
from langchain.agents import LLMSingleActionAgent, AgentExecutor
from langchain import OpenAI, LLMChain
from langchain.tools import DuckDuckGoSearchRun
from utils.tools import duck
from recommender.template import CustomPromptTemplate, CustomOutputParser
from recommender.recommender_system import Recommender

# Initialize environment variables and other setup configurations
set_env() # Assuming this function sets up environment variables

# Set up the tools available to the agent
tools = [
    DuckDuckGoSearchRun(name="Search WebMD", func=duck)
]

# Define Custom Prompt Template and Output Parser
prompt_template = CustomPromptTemplate(tools=tools)
output_parser = CustomOutputParser()

# Setup for the LLM Chain
llm = OpenAI(model="gpt-4", temperature=0, openai_api_key=os.environ["OPENAI_API_KEY"])
llm_chain = LLMChain(llm=llm, prompt=prompt_template)

# Setup for the agent and its execution
agent = LLMSingleActionAgent(
    llm_chain=llm_chain,
    output_parser=output_parser,
    stop=["\nObservation:"],
    allowed_tools=[tool.name for tool in tools]
)

agent_executor = AgentExecutor.from_agent_and_tools(agent=agent, tools=tools, verbose=True)

# Recommender System
rec = Recommender(agent_executor)

# Gradio Interface
def respond_to_input(user_input):
    response = rec.respond_to_input(user_input)
    return response

with gr.Blocks() as demo:
    gr.Markdown('# Health Advisor Agent')
    gr.Markdown(greeting)
    with gr.Row():
        chatbot = gr.Chatbot()
        msg = gr.Textbox(label="Your Problems")
        clear = gr.ClearButton([msg, chatbot])
        msg.submit(respond_to_input, inputs=msg, outputs=chatbot)

demo.launch()
