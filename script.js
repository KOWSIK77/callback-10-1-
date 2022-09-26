var content = document.createElement("div")
content.setAttribute("id","con")

var heading = document.createElement("h1")
heading.setAttribute("id","head")

content.append(heading)

document.body.append(content)


setTimeout(()=>{
    document.querySelector("h1").innerHTML="10"
    return setTimeout(()=>{
        document.querySelector("h1").innerHTML="9"
        return setTimeout(()=>{
            document.querySelector("h1").innerHTML="8"
            return  setTimeout(()=>{
                document.querySelector("h1").innerHTML="7"
                return  setTimeout(()=>{
                    document.querySelector("h1").innerHTML="6"
                    return  setTimeout(()=>{
                        document.querySelector("h1").innerHTML="5"
                        return  setTimeout(()=>{
                            document.querySelector("h1").innerHTML="4"
                            return  setTimeout(()=>{
                                document.querySelector("h1").innerHTML="3"
                                return  setTimeout(()=>{
                                    document.querySelector("h1").innerHTML="2"
                                    return  setTimeout(()=>{
                                        document.querySelector("h1").innerHTML="1"
                                        return  setTimeout(()=>{
                                            document.querySelector("h1").innerHTML="Happy New Year"
                                            return
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)