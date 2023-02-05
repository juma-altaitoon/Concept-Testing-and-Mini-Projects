# exercise-02 Length of Phrase

# Write the code that:
# 1. Prompts the user to enter a phrase:
#      Please enter a word or phrase: 
# 2. Print the following message:
#      - What you entered is xx characters long
# 3. Return to step 1, unless the word 'quit' was entered.

# Exercise 2
def phrase_length():
    cond = True
    while (cond):
        phrase= input("Please enter a word or phrase:")
        if(phrase.lower() == "quit"):
            cond = False
        else:
            print(f"What you entered is {len(phrase)} characters long")

phrase_length()