<script>
    import Nav from '$lib/Nav.svelte';
</script>
 
    <div class="footer">
    </div>

    <footer>
          <div class="footer-logo">   
          </div>
          <div class="footer-links">
              <ul>
                  <li><a href="../src/routes/Shop/+page.svelte">Shop</a></li>
                  <li><a href="../src/routes/Collections/+page.svelte">Collections</a></li>
                  <li><a href="../src/routes/About Us/+page.svelte">About Us</a></li>
                  <li><a href="../src/routes/contact/+page.svelte">Contact</a></li>
              </ul>
          </div>

      <div class="footer-disclaimer">
          &copy; 2023 Nike Store. All Rights Reserved.
      </div>
  </footer>
  
  
 
  <footer>
    <div class="footer-container">
        <div class="footer-logo">
           
        </div>
        <div class="footer-links">
            
        </div>
        <div class="footer-social">
           
        </div>
    </div>
    <div class="footer-disclaimer">
        &copy; <span id="currentYear"></span> Nike | 
        <a id="js-attribution">Denise Caponpon</a>
    </div>
</footer>


<style>
    
    #js-attribution {
        text-decoration: none;
        color: #007bff; 
    }

    #js-attribution:hover {
        text-decoration: underline;
    }
</style>

