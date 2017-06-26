<template>
  <div class="home">home</div>
</template>
<script>
  import Test, {TestQuery} from './test.ex';
  export default {
    created() {
      this.create();
      this.query();
      this.update();
//      this.delete();
    },
    methods: {
      create() {
        let test = new Test();
        test.name = 'tyy';
        test.save().then((res) => {
          console.log('Create Success');
          console.log(res);
        }, (e) => {
          console.log(e);
        });
      },
      update() {
        let query = new TestQuery();
        query.first().then((test) => {
          test.name = 'update';
          test.save().then((res) => {
            console.log('Update Success');
            console.log(res);
          }, (e) => {
            console.log(e);
          });
        }, (e) => {
          console.error(e);
        });
      },
      delete() {
        let query = new TestQuery();
        query.first().then((test) => {
          test.destroy().then((res) => {
            console.log('Delete Success');
            console.log(res);
          }, (e) => {
            console.log(e);
          });
        }, (e) => {
          console.error(e);
        });
      },
      query() {
        let query = new TestQuery();
        query.find().then((res) => {
          console.log('Query Success');
          console.loe(res);
        }, (e) => {
          console.error(e);
        });
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
