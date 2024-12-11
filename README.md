SB Hacks X 

Scott Ren, Krystal Wu, and Joshua Zhou created the Health Advisor Agent, a tool designed to assist patients in identifying possible illnesses using a KNN model trained and tested with data that is 100% accurate. We had about a day to implement and present our work!<br> 
### Techstack: <br>
Langchain, LLM, DuckDuckGo searches, and WebMD resources to provide guidance for patients on appropriate actions for non-severe conditions that don't require hospitalization.
#### Synopsis
AI-powered medical advisory chatbot using Python, Gradio, and LangChain. Integrated OpenAI GPT-3.5/4 models and external tools (DuckDuckGo API) for real-time data fetching

Demo / Devpost:  https://devpost.com/software/ha-ka4cep

### How to run: <br>
Due to time constraints, frontend development is underimplemented. Running python backend is preferred: <br>
- Under /Health-Advisor, pip install gradio langchain openai duckduckgo-search (as well as other dependencies and downgrading as some packages are deprecated- i.e, pip3 install langchain-community)
- create your OpenAI apy key
- change the OPENAI_API_KEY in utils/apikey.ini
- double check the gpt model to your appropriate OpenAI plan in app.py line 38
- python3 app.py or python app.py
