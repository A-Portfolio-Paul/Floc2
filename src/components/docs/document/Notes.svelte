<script>
    // export let notes
    export let cardId
    export let colorShade
    export let editable
    import {currentView} from '../../../utils/stores'

    const newShade = colorShade +1
    
</script>
<div class={$currentView.cards[cardId].notes ? " pb-1 rounded-md max-w-6xl" : " pb-1 rounded-md max-w-6xl bg-blue-200 "} >
  <pre  class="textarea text-blue-400  hover:text-blue-600 rounded w-full flex-grow" placeholder="Enter Notes"  role="textbox" contenteditable bind:innerHTML={$cards[cardId].notes}></pre>
</div>

<style>
pre{
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: justify;
}
.textarea:hover{
  opacity:50;
}
.textarea {
  font-family: inherit;
  font-size: inherit;
  padding: 1px 6px;
}
.textarea {
  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  min-height: 40px;
  line-height: 20px;
}
.textarea[contenteditable]:empty::before {
  content: "Optional Notes";
}

</style>