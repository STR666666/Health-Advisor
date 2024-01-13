# app.py
import gradio as gr
from recommender.recommender_system import Recommender

rec = Recommender()
greeting = "Hello, and I hope you're feeling alright today! My role is to assist you with any health-related concerns. Could you let me know if you're experiencing any discomfort, pain, or symptoms of illness? It's important to remember that while I can provide general health advice, I'm not a substitute for professional medical care. If you believe you are facing a medical emergency, please don't hesitate to call 911 and visit the nearest hospital immediately. For other health concerns, feel free to share details, and I'll do my best to assist you."

# Set up the Gradio interface
with gr.Blocks() as demo:
    gr.Markdown('# Health Advisor Agent')
    gr.Markdown(greeting)
    with gr.Row():
        with gr.Column():
            chatbot = gr.Chatbot()
            msg = gr.Textbox(label="Your Problems")
            clear = gr.ClearButton([msg, chatbot])

    msg.submit(rec.respond, [msg, chatbot], [msg, chatbot])

# Launch the Gradio app
demo.launch()