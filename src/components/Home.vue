<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Home
        input(
          type="text"
          placeholder="Whar we will watch?"
          v-model="taskTitle"
          @keyup.enter = "newTask"
        )
        input(
          type="text"
          v-model="taskDescription"
          @keyup.enter = "newTask"
        )
        .option-list
          input.what-watch--radio(type="radio" v-model="whatWatch" value="Serial")
          label(
          )  Serial 
          input.what-watch--radio(type="radio" v-model="whatWatch" value="Film")
          label(
          )  Film 
        .total-time
          .total-time__film(
            v-if="whatWatch === 'Film'"
          )  
            span Hours
            input.time-input(
              type="number"
              v-model="filmHours"
            )
            span Minutes
            input.time-input(
              type="number"
              v-model="filmMinutes"
            )

            p {{ filmTime }}

          // Serial Time
          .total-time__serial(
            v-if="whatWatch === 'Serial'"
          )
            span.time-title How many season?
            input.time-input(
              type="number"
              v-model="serialSeason"
            )
            span.time-title How many series?
            input.time-input(
              type="number"
              v-model="serialSeries"
            )
            span.time-title How long is one series? (minutes)
            input.time-input(
              type="number"
              v-model="serialSeriesMinutes"
            )

            p {{ serialTime }}
        .tag-list.tag-list--add
          .ui-tag__wrapper(
            @click="tagMenuShow = !tagMenuShow"
          )
            .ui-tag
              span.tag-title Add New
              span.button-close(
                :class="{ active: !tagMenuShow }"
              )

        .tag-list.tag-list--menu(
          v-if="tagMenuShow"
        )
          input.tag-add--input(
            type="text"
            placeholder="New tag"
            v-model="tagTitle"
            @keyup.enter="newTag()"
          )
          .button.button-default(
            @click="newTag()"
          ) Send
        .tag-list
          transition-group(
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutDown"
          )
            .ui-tag__wrapper(
              v-for="tag in tags"
              :key="tag.title"
            )
              .ui-tag(          
                @click="addTagUsed(tag)"
                :class="{'ui-tag--active': tag.use}"
              )
                span.tag-title {{ tag.title }}
                span.button-close 

        button.button.button-default(
          @click="newTask"
        ) Send       

</template>

<script>
export default {
  data () {
    return {
      taskTitle: '',
      taskDescription: '',
      whatWatch: 'Film',
      filmHours: 1,
      filmMinutes: 25,
      serialSeason: 1,
      serialSeries: 25,
      serialSeriesMinutes: 25,
      tagMenuShow: false,
      tagTitle: '',
      tagsUsed: [],
      
    }
  },
  computed: {
    filmTime() {
      let min = (this.filmHours * 60) + (this.filmMinutes * 1);
    
      return this.getHoursAndMinutes(min);
    },
   serialTime() {
      let min = this.filmHours * this.serialSeries * this.serialSeriesMinutes;
    
      return this.getHoursAndMinutes(min);
    },
    tags() {
      return this.$store.getters.tags;
    }
    
  },
  methods: {
    newTask() {
      if(this.taskTitle === '') {
      return 
    }
      let time;
      if(this.whatWatch === 'Film') {
        time = this.filmTime;
      }
      else {
        time = this.serialTime;
      }
      const task = {
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        time,
        tags: this.tagsUsed,
        completed: false,
        editing: false
      }
      console.log(task);
      this.$store.dispatch('newTask', task);
      this.taskTitle = '';
      this.taskDescription = '';
      this.tagsUsed = []

      for(let i = 0;i < this.tags.length;i++) {
        this.tags[i].use = false
      } 
    },
      getHoursAndMinutes(minutes) {
        let hours = Math.trunc(minutes/60);
        let min = minutes % 60;
        return hours + ' Hours ' + min + ' Minutes';
    },
    addTagUsed(tag) {
      console.log('addTagUsed')
      tag.use = !tag.use;
      if(tag.use) {
        this.tagsUsed.push({
          title: tag.title
        }
        );
      }
      else {
        this.tagsUsed.splice(tag.title, 1);
      }
    },
    newTag() {
      if (this.tagTitle === '') {
        return
      }
      // this.tags.push({
      //   title: this.tagTitle,
      //   used: false
      // })
      const tag = {
        title: this.tagTitle,
        use: false
      }
      this.$store.dispatch('newTag', tag);
      console.log('newTag')
      this.tagTitle = ''
  },
}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.option-list
  display flex
  margin-bottom 20px
  .what-watch--radio
    margin-right 12px
  label
    margin-right 20px
    &:last-child
      margin-right 0

.total-time__film
  margin-bottom: 10px

.tag-list
  display flex
  align-items center

.ui-tag__wrapper
  display flex
  margin-bottom 10px

.tag-list--menu
  margin-bottom 10px  

.ui-tag
  margin-right 10px

.ui-tag--active
  background #444ce0
  color: #fff

// New Tag Input
.tag-list--menu
  display flex
  align-items center
.tag-add--input
  margin-bottom 0
  margin-right 10px
  height 42px
// Total Time
.total-time
  p
    margin-bottom 6px
  span
    margin-right 16px
  .task-input
    max-width 80px
    margin-bottom 28px
    margin-right 10px
.button-list
  display flex
  justify-content flex-end

.animated
  animation-duration: 1s

@keyframes fadeInRight 
  from 
    opacity: 0
    transform: translate3d(100%, 0, 0)
  
  to 
    opacity: 1
    transform: translate3d(0, 0, 0)
  

@keyframes fadeOutDown 
  from 
    opacity: 1
  
  to 
    opacity: 0
    transform: translate3d(0, 100%, 0)
  


</style>
