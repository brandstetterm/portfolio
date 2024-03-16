<script lang="ts">
    import Tag from "./Tag.svelte";

  export let title: string;
  export let description: string;
  export let tags: [string];
</script>

<div class="flex flex-col gap-2 p-4 rounded shadow">
  <span class="font-bold uppercase text-slate-900 tracking-tight whitespace-nowrap text-ellipsis overflow-hidden">{title}</span>
  <span class="text-slate-600">{description}</span>
  <ul class="flex flex-wrap gap-1 mt-2">
  {#each tags as tag}
    <li>
      <Tag label={tag} />
    </li>
  {/each}
  </ul>
</div>


