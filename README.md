## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)


PLAN
HTML Setup
- 3 divs for cups
  WHY - need to show which cup the ball is under and replace that image
  HOW? - update the DOM - set the image source to new image

- 3 buttons
  WHY? - need to get event data on what user clicked
  HOW? - have event listeners with click for reach button

- 3 spans to display wins/losses/total
  WHY? - to show user total number of wins, losses, and total games
  HOW - change the textContent of the span

  EVENTS
  - User clicks one of 3 buttons
  - Set State
    - reset styling
    - increment total games
    - use Math Random to generate pick of which cup is correct
    - Compare the generated correct cup with one user clicked
      - if correct one was picked - increment wins
      - if incorrect was picked - dont do anything - derive losses
    -Update the DOM
      - change image revealing correct cup
      - change numbers of wins/losses/total

    - STRETCH - try again button