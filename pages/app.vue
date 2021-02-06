<template>
    <div>
        <div style="margin-bottom: 90px; margin-left: 25px; margin-top: 7px">
                <h3 style="margin-right: 5px"> Github Username: </h3>
                <input v-model="username" placeholder="Username" @change="getProjects" size="50"/>
        </div>

        <div class="container" style="text-align: center;">
            <div v-if="username">
                <div v-if="projectArr">
                    <h3> {{usernameHeader}}'s projects </h3>
                    <div style="text-align: justify">
                        <div v-for="item in projectArr" :key="item.key">
                            <project-component :projectTitle="item.title" :readme="item.readme"/>
                        </div> 
                        <!-- 
                            Use this component if the Github API call limit is exceeded
                            
                            <div v-for="item in dummyProjects" :key="item.key">
                            <project-component :projectTitle="item.title" :readme="item.readme"/>
                        </div> 
                        -->
                    </div>
                </div>
                <div v-else>
                    <h3> No Username found :( </h3>
                </div>
            </div>

            <div v-else>
                <h2> Welcome to Github Repository Retriever! </h2>
            </div>
        </div>
    </div>
</template>

<script>
import content from '../functions/content'
import projectComponent from '../components/projectComponent'

export default {
  components: { projectComponent},
    data(){
        return {
            username: "",
            projectArr: [],
            usernameHeader: "",
            dummyProjects: [
                {
                    title: "Project 1",
                    readme: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris elit, maximus et tincidunt at, faucibus ac dolor. Praesent aliquet finibus enim, at commodo dui consequat at. Suspendisse tortor odio, pulvinar scelerisque purus sed, tristique dictum urna. Maecenas sed sodales est. Morbi vel tincidunt nulla, in tempor neque. Cras sit amet iaculis dolor. Vivamus sit amet dolor leo. Aliquam tincidunt convallis bibendum. Praesent efficitur nunc sed quam condimentum, volutpat hendrerit est varius. Mauris venenatis lacus sed mi lacinia vulputate. Ut ac eleifend mauris, sed mattis sem. Integer molestie convallis tortor at convallis. Maecenas vel aliquam sapien.
Aenean laoreet, mi eu placerat mattis, nibh ligula iaculis lorem, id gravida turpis purus sit amet ligula. Maecenas porttitor nisl ut felis viverra, in aliquam neque luctus. Aenean vel mi sit amet leo vulputate euismod. Pellentesque volutpat faucibus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ac eleifend lectus. Duis ullamcorper, dolor nec blandit venenatis, enim mi interdum arcu, et facilisis justo justo sed mi. Suspendisse quis ligula sed massa maximus scelerisque. Pellentesque at lorem sem. Integer eget tincidunt neque. Ut sodales eros elit, ut rhoncus lorem suscipit nec. Quisque varius eu neque in ornare. Quisque at neque interdum, tempor metus sed, tristique risus. Pellentesque consequat vehicula lectus, ac venenatis dui tristique vel.`
                },
                {
                    title: "Project 2",
                    readme: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris elit, maximus et tincidunt at, faucibus ac dolor. Praesent aliquet finibus enim, at commodo dui consequat at. Suspendisse tortor odio, pulvinar scelerisque purus sed, tristique dictum urna. Maecenas sed sodales est. Morbi vel tincidunt nulla, in tempor neque. Cras sit amet iaculis dolor. Vivamus sit amet dolor leo. Aliquam tincidunt convallis bibendum. Praesent efficitur nunc sed quam condimentum, volutpat hendrerit est varius. Mauris venenatis lacus sed mi lacinia vulputate. Ut ac eleifend mauris, sed mattis sem. Integer molestie convallis tortor at convallis. Maecenas vel aliquam sapien.
Aenean laoreet, mi eu placerat mattis, nibh ligula iaculis lorem, id gravida turpis purus sit amet ligula. Maecenas porttitor nisl ut felis viverra, in aliquam neque luctus. Aenean vel mi sit amet leo vulputate euismod. Pellentesque volutpat faucibus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ac eleifend lectus. Duis ullamcorper, dolor nec blandit venenatis, enim mi interdum arcu, et facilisis justo justo sed mi. Suspendisse quis ligula sed massa maximus scelerisque. Pellentesque at lorem sem. Integer eget tincidunt neque. Ut sodales eros elit, ut rhoncus lorem suscipit nec. Quisque varius eu neque in ornare. Quisque at neque interdum, tempor metus sed, tristique risus. Pellentesque consequat vehicula lectus, ac venenatis dui tristique vel.`
                },
                {
                    title: "Project 3",
                    readme: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris elit, maximus et tincidunt at, faucibus ac dolor. Praesent aliquet finibus enim, at commodo dui consequat at. Suspendisse tortor odio, pulvinar scelerisque purus sed, tristique dictum urna. Maecenas sed sodales est. Morbi vel tincidunt nulla, in tempor neque. Cras sit amet iaculis dolor. Vivamus sit amet dolor leo. Aliquam tincidunt convallis bibendum. Praesent efficitur nunc sed quam condimentum, volutpat hendrerit est varius. Mauris venenatis lacus sed mi lacinia vulputate. Ut ac eleifend mauris, sed mattis sem. Integer molestie convallis tortor at convallis. Maecenas vel aliquam sapien.
Aenean laoreet, mi eu placerat mattis, nibh ligula iaculis lorem, id gravida turpis purus sit amet ligula. Maecenas porttitor nisl ut felis viverra, in aliquam neque luctus. Aenean vel mi sit amet leo vulputate euismod. Pellentesque volutpat faucibus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ac eleifend lectus. Duis ullamcorper, dolor nec blandit venenatis, enim mi interdum arcu, et facilisis justo justo sed mi. Suspendisse quis ligula sed massa maximus scelerisque. Pellentesque at lorem sem. Integer eget tincidunt neque. Ut sodales eros elit, ut rhoncus lorem suscipit nec. Quisque varius eu neque in ornare. Quisque at neque interdum, tempor metus sed, tristique risus. Pellentesque consequat vehicula lectus, ac venenatis dui tristique vel.`
                },
                {
                    title: "Project 4",
                    readme: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris elit, maximus et tincidunt at, faucibus ac dolor. Praesent aliquet finibus enim, at commodo dui consequat at. Suspendisse tortor odio, pulvinar scelerisque purus sed, tristique dictum urna. Maecenas sed sodales est. Morbi vel tincidunt nulla, in tempor neque. Cras sit amet iaculis dolor. Vivamus sit amet dolor leo. Aliquam tincidunt convallis bibendum. Praesent efficitur nunc sed quam condimentum, volutpat hendrerit est varius. Mauris venenatis lacus sed mi lacinia vulputate. Ut ac eleifend mauris, sed mattis sem. Integer molestie convallis tortor at convallis. Maecenas vel aliquam sapien.
Aenean laoreet, mi eu placerat mattis, nibh ligula iaculis lorem, id gravida turpis purus sit amet ligula. Maecenas porttitor nisl ut felis viverra, in aliquam neque luctus. Aenean vel mi sit amet leo vulputate euismod. Pellentesque volutpat faucibus rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ac eleifend lectus. Duis ullamcorper, dolor nec blandit venenatis, enim mi interdum arcu, et facilisis justo justo sed mi. Suspendisse quis ligula sed massa maximus scelerisque. Pellentesque at lorem sem. Integer eget tincidunt neque. Ut sodales eros elit, ut rhoncus lorem suscipit nec. Quisque varius eu neque in ornare. Quisque at neque interdum, tempor metus sed, tristique risus. Pellentesque consequat vehicula lectus, ac venenatis dui tristique vel.`
                }
            ],
            
        }
    },
    methods: {
        observerError(arr) {
            arr = JSON.parse(JSON.stringify(arr))
            for (let i = 0; i < arr.length; i++) {
                arr[i] = JSON.parse(JSON.stringify(arr[i]))
            }
        },
        getProjects(){
            this.projectArr = []
            this.usernameHeader = this.username
            content.getGithubProfileRepos(this.username).then((res) => {
                for(let i = 0; i < res.length; i++){
                    let obj = {
                        title: res[i].name,
                        readme: "",
                        key: res[i].id
                    }
                    content.getRepoReadme(this.username, res[i].name).then((result) => {
                        let encoded;
                        console.log(result)
                        if (result.content){
                            encoded = atob(result.content)
                            encoded = encoded.slice(res[i].name.length + 3,)
                        }
                        else{
                            encoded = "User did not provide readme"
                        }
                        obj.readme = encoded
                    })
                    this.projectArr.push(obj)
                }
            })
            
        },
    }
}
</script>

<style>
    
</style>