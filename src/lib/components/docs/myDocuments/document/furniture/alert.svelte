<script>
  export let show
  export let close
  export let title
</script>

{#if show}
  <div>
    <section>
      <header>
        <strong>
          {title}
        </strong>
        <button on:click={close}>
          Close
        </button>
      </header>
  
      <div>
        <slot />
      </div>
    </section>
  </div>
{/if}