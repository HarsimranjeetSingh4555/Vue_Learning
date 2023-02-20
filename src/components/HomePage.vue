<template>
<div>

    <div class='nav'>
        <div>
            <h2>Extech Digital</h2>
         
           
        </div>
        <div class='mainlist'>
            <ul class='list'>
                <li>Home</li>
                <li>Contact</li>
                <li>Menu</li>
                <li>About</li>
            </ul>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "HomePage",
    props: {
        prop: String
    },
    data(){
        return{
            email:'sjeetsing420@gmail.com',
            mobile:8699882845,
            getname : function(a){
                return a
            }
        }
    }
}



</script>

<style>
h2 {}

.nav {
    background: #8f89c5;
    display: flex;
}

.list {
    display: flex;
    list-style: none;
    gap: 25px;
    padding: 5px;
    margin: 20px;
}

h4 {
    padding: 5px;
    margin: 20px;
}
</style>
