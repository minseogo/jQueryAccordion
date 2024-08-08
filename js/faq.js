window.addEventListener('load',function(){
    document.querySelectorAll("#faq h3").forEach(function(ele, idx){
        ele.addEventListener('click',function(){
            this.parentElement.classList.add('open');

            let siblings = this.parentElement.parentElement.children;
            //부모태그까지 포함된 상태임
            // 항상
        console.log(
            " 데이터 : " + siblings, 
            " 데이터타입 : " +  typeof siblings, 
            " 정렬인가? : " +   Array.isArray(siblings),
            " 키보여줘 : " + Object.keys(siblings)
          )
            // forEach 대신해 for of 사용하기
            for (let sibling of siblings) {
                // for of array 아니면서 array 형 데이터에서 쓴다.
                if (sibling !== this.parentElement) { // 부모빼고
                    sibling.classList.remove('open');
                }
            }
        })
    })
})