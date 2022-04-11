<script>
    export let notes
    export let colorShade

    let style 
	  style = " text-blue-100  rounded p-1 w-full flex-grow  bg-blue-"+colorShade

</script>


<div class="px-2 pb-1 rounded-md">
  <pre  class={style} placeholder="Enter Notes"  role="textbox" contenteditable bind:innerHTML={notes}></pre>
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
  border: 1px solid #22c55e;
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
  content: "You can add notes here";
}

</style>


