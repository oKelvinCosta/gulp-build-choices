export default{name:"ImgSideCard",props:{src:String,alt:String},template:`
    <div class="img-side-card mb-10">
      <img
        class="img--round img--purple-shadow"
        :src="src"
        :alt="alt"
      />
  
      <div class="card card--purple-shadow">
        <div class="card-content">
          <slot></slot>
        </div>
      </div>
    </div>
    `};