<template>
<div>
    <h1 >検索結果</h1>
    <home-result></home-result>
    </div>
</template>
<script>
import HomeResult from '@/components/HomeResult';
export default{
    name:'Menu',
    components:{
        HomeResult
    }
};
</script>
<style scoped>
h1{
text-align: center;
}
.center{
text-align: center;
}
</style>