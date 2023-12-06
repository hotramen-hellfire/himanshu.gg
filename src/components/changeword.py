import sys

def replace_word(input_text, old_word, new_word):
    return input_text.replace(old_word, new_word)

if __name__ == "__main__":
    # Check if enough arguments are provided
    if len(sys.argv) < 3:
        print("Usage: python script.py <old_word> <new_word>")
        sys.exit(1)

    # Read text from stdin
    input_text = sys.stdin.read()

    # Get old and new words from command line arguments
    old_word = sys.argv[1]
    new_word = sys.argv[2]

    # Replace the old word with the new word
    result_text = replace_word(input_text, old_word, new_word)

    # Print the result to stdout
    print(result_text)

