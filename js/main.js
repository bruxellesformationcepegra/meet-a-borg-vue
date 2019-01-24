
let app = new Vue({
    el: "#app",
    data(){
        return {
            robots: [],
            filteredRobots: [],
            males: [],
            females: []
        }
    },
    methods: {
        fullName(robot){
            return `${robot.first_name} ${robot.last_name}`;
        },
        filter(type){
            if(type==='Male'){
                this.filteredRobots = this.males;
            }
            else if(type === 'Female'){
                this.filteredRobots = this.females;
            }
            else{
                this.filteredRobots = this.robots;
            }
        }
    },
    mounted(){

        
        axios.get("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/robots")
        .then(response => {
            this.robots = response.data;
            this.males = this.robots.filter(robot => robot.gender === 'Male');
            this.females = this.robots.filter(robot => robot.gender === 'Female');
            this.filteredRobots = this.robots;
        })
    }
});