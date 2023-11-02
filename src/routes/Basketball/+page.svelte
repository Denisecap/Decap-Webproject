<script>
    let images = [];
   
    async function fetchData() {
      try {
        const response = await fetch(
          'https://api.unsplash.com/collections/1926545/photos?client_id=YOUR_ACCESS_KEY'
        );
        if (response.ok) {
          images = await response.json();
        } else {
          console.error('Failed to fetch data from Unsplash');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
   
    fetchData(); // Fetch data when the component is loaded
  </script>
   
  {#if images.length > 0}
  <div class="image-list">
      {#each images as image (image.id)}
  <img src={image.urls.small} alt={image.description} />
      {/each}
  </div>
  {:else}
  <p>Loading images...</p>
  {/if}

   


