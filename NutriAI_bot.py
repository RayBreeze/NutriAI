import streamlit as st
from chatbot_backend import get_nutrition_response
def main():
    st.set_page_config(
        page_title="NutriAI",
        page_icon=":apple:",
        layout="wide",
        initial_sidebar_state="collapsed",
    )
    st.sidebar.title("About")
    st.sidebar.info(
        """
        NutriAI is an AI-powered chatbot designed to answer your nutrition-related queries.
        Ask anything about diet, nutrition, and healthy eating habits.
        """
    )
    st.sidebar.title("Contact")
    st.sidebar.info(
        """
        Created by Stack UnderFlow [ 1st Year CSE & IT ]

        Government College of Engineering and Ceramic Technology, Kolkata
        """
    )
    if st.sidebar.button("Clear Chat"):
        st.session_state.chat_history = []

    st.title("NutriAI")
    st.subheader("AI Powered Nutritionist")
    if 'chat_history' not in st.session_state:
        st.session_state.chat_history = []

    for i, message in enumerate(st.session_state.chat_history):
        if i % 2 == 0:
            st.chat_message('user').markdown(message)
        else:
            st.chat_message('assistant').markdown(message)
            
    prompt=st.chat_input("Ask me any query about Nutrition")
    if prompt:
        st.chat_message('user').markdown(prompt)
        st.session_state.chat_history.append(prompt)

        response = get_nutrition_response(prompt)
        st.chat_message('assistant').markdown(response)
        st.session_state.chat_history.append(response)
if __name__ == "__main__":
    main()