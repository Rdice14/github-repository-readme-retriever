<template>
    <div class="card" style="margin-bottom:30px">
        <div class="card-header">
            <h4> {{ projectTitle }} </h4>
        </div>
        <div class="card-body">
            {{readme}}
        </div>
    </div>
</template>

<script>
export default {
    name: "projectComponent",
    props: ["projectTitle", "readme"],
    data:{
    }
}
</script>


