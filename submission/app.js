const nav = document.querySelector('.nav-column');
const overlay = document.querySelector('.overlay');

document.querySelector('.but-nav').addEventListener("click", function(){
    nav.classList.add("nav2-column");
    overlay.classList.add("overlay2")
})

document.querySelector('.close-nav').addEventListener("click",function(){
    nav.classList.remove("nav2-column");
    overlay.classList.remove("overlay2");
})

document.querySelector(".overlay").addEventListener("click",function(){
    nav.classList.remove("nav2-column");
    overlay.classList.remove("overlay2");
})


    function link(event_type){
        if(event_type=='fashion_show'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSewsreDSPUCeKLzg2kX3Z9J7zDG2RZdvW3SqeSlwkOkf7aDBw/viewform?usp=sf_link";
        }
        else if(event_type=='western_dance'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLScGD7e4YOfW5wzV6xorzhDsBCoPJElsEFvNQNQB-ytNM7ssWg/viewform?usp=sf_link";
        }
        else if(event_type=='stand_up_comedy'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSdRwYTFJ9BMPXyJzhDydmMST5faabnF_mO7l5nRx53dfC3Rmg/viewform?usp=sf_link";
        }
        else if(event_type=='photography'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSetUuKbRcjJj8tohgCo2G1bPOvGhFDcyLJOBgSqVIRZt2i8_Q/viewform?usp=sf_link";
        }
        else if(event_type=='short_film'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSfu06NR97X_LzoCjpBXdILenoC6B2DiDOGD1OaHUJsrSXtgBg/viewform?usp=sf_link";
        }
        else if(event_type=='creative_writing'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSd1y-mYMkpdjjiPmfycRHUG56uPcdtO60iZoLz_GNKgerA8iA/viewform?usp=sf_link";
        }
        else if(event_type=='slam_poetry'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSeZCXq3zR-W788EVDJdBxA4sS3VMvTtTftoyoyt05fuLdmR2A/viewform?usp=sf_link";
        }
        else if(event_type=='war_of_rjs'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLScjoNGZ0QQdYric1kcqPHdTqyVIJe-5UjHdnVg1vdpT7OTSrQ/viewform?usp=sf_link";
        }
        else if(event_type=='western_music'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSdcwMIp8_TDPYPwSZhGsrfL08yzyiGlhJYz4k3VguMSsT-SEg/viewform?usp=sf_link";
        }
        else if(event_type=='martial_arts'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSe7PIQLW37UMZpeub8rWpV0VeBVscXr4i_dYMPQOe7PYIB-Zg/viewform?usp=sf_link";
        }
        else if(event_type=='cake_art'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSd5jj9KXRL2Osy-jL9RgqrnT9jruSMByDVFflbrLe3LiQ-5RA/viewform?usp=sf_link";
        }
        else if(event_type=='comic_strip'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSfhAUwahnpElTL7sclYTWxLZcPqktbPpuOom7-XgNrmyW5B2Q/viewform?usp=sf_link";
        }
        else if(event_type=='talent_show'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSeKESB2WBb8uqr1DDobdB8LFpFbkpFHfzwSCtLW3qrFO2pF9g/viewform?usp=sf_link";
        }
        else if(event_type=='face_painting'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSc8hzxaWTQ3DBcyCnZDynEPeDl7x0GH6ScJHzbvylWUtZbH8A/viewform?usp=sf_link";
        }
        else if(event_type=='eastern_dance'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSfvL5hSqastu0rziIxnB95CBVZZp3_w_a8JYlPz0dSwTlQ35w/viewform?usp=sf_link";
        }
        else if(event_type=='eastern_music'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSfmetR8P4zj_1Fn-05tVp0zIJtY334aLtEtBAkK0GH10MIgMw/viewform?usp=sf_link";
        }
        else if(event_type=='digital_art'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSdLefQBAzIoGq2yvBvGYy6b6qLMk9Flq9df4Dr7B-tP-R2k6w/viewform?usp=sf_link";
        }
        else if(event_type=='joint_venture'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSc8ZpaXLz0Dskiqkzn5LDE8g7Qoq5qOwutzx8DwH_-VLMugLw/viewform?usp=sf_link";
        }
        else if(event_type=='shark_tank'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSd5GBmAgPUc6nTVK6SR2vsE1WUGxpObsfurL_eLPO4saj9Evg/viewform?usp=sf_link";
        }
        else if(event_type=='football'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSfs35FH7vk2uyL0kDadEYFujc9I1Y9eb1Hh_em_XumsYgc83A/viewform?usp=sf_link";
        }
        else if(event_type=='basketball'){
            document.getElementById("form-submit").action = "https://docs.google.com/forms/d/e/1FAIpQLSfMkK89XAz6pYgEINKn41NFFK2Xm4h3rQOvfenW3AWgc5Knkw/viewform?usp=sf_link";
        }

    }