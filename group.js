let groupTemplate = (group, index) => {
    let item = `
    <div class="group">

        <div class="image" style="
        background-image: url('https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${group.cloudflare_image_id}/shopitem');
    
        ">
        </div>
       
        <div class="text" >
            <h3>${group.title}</h3>
        </div>
    
        <button data-sellix-group="${group.uniqid}" >VIEW</button>
    </div>`;

    
    return item;
}

let getGroups = () => {
    fetch('getGroups.html')
    .then(response => response.json())
    .then(response => {
        let groups = response.data.groups;
        console.log(groups);

        groups.forEach(group => {
            $(".groups").append(groupTemplate(group));
        });
    });
}

$(window).on('load', function () {
    getGroups();
});