import gradio as gr
from langchain.chains import LLMChain
from langchain.memory import ConversationBufferMemory
from langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate, MessagesPlaceholder
from langchain.schema import SystemMessage
from langchain.chat_models import ChatOpenAI

# Define the prompt template
prompt = ChatPromptTemplate.from_messages(
    [
        SystemMessage(content="You are a chatbot having a conversation with a human."),
        MessagesPlaceholder(variable_name="chat_history"),
        HumanMessagePromptTemplate.from_template("{human_input}")
    ]
)

# Set up memory
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

# Initialize the LLM (Language Model)
llm = ChatOpenAI(model="gpt-4", temperature=0, openai_api_key='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')

# Create the LangChain LLM Chain
chat_llm_chain = LLMChain(
    llm=llm,
    prompt=prompt,
    verbose=True,
    memory=memory,
)

# Define the response function for Gradio
def respond(message, chat_history):
    response = chat_llm_chain.predict(human_input=message)
    chat_history.append((message, response))
    return "", chat_history

# Set up the Gradio interface
with gr.Blocks() as demo:
    gr.Markdown('# LangChain-GPT Chatbot')
    with gr.Row():
        with gr.Column():
            chatbot = gr.Chatbot()
            msg = gr.Textbox(label="Your Message")
            clear = gr.ClearButton([msg, chatbot])

    msg.submit(respond, [msg, chatbot], [msg, chatbot])

# Launch the Gradio app
demo.launch()
