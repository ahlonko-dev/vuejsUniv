<template>
<section>
  <div class="contenu-app">
   <div class="contenu-header-main">

    
   </div>
<router-view/>


    <footer class="footer">

      <div class="menu-nav">
        <div class="row">

          <div class="col-4 icon-container">
            <ul>
              <li>
                <a href="/Mission">
                <i class="fas fa-list-ul active"></i><router-link to="/Mission">PageClient</router-link> </a>
              </li>
            </ul>
          </div>

          <div class="col-4 icon-container">
            <ul>
              <li><a href="/Profil"><i class="fas fa-user"></i><router-link to="/PAgeProfil">Profil</router-link></a></li>
            </ul>
          </div>

          <div class="col-4 icon-container">
            <ul>
              <li><a href="/Option"><i class="fas fa-sliders-h"></i><router-link to="/Option">Option</router-link>
              </a>
              </li>
            </ul>
          </div>

        </div>
      </div><!-- /Nav tabs-->
    </footer>
  </div>


   

</section>
</template>

<script>
export default {};
</script>

<style>
</style>
