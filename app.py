# app.py
import gradio as gr
from recommender.recommender_system import Recommender

rec = Recommender()

# Set up the Gradio interface
with gr.Blocks() as demo:
    gr.Markdown('# Health Advisor Agent')
    with gr.Row():
        with gr.Column():
            chatbot = gr.Chatbot()
            msg = gr.Textbox(label="Your Problems")
            clear = gr.ClearButton([msg, chatbot])

    msg.submit(rec.respond, [msg, chatbot], [msg, chatbot])

# Launch the Gradio app
demo.launch()
