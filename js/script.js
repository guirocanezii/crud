let posts = [];

const meuForm = document.querySelector("form");
console.log(meuForm);

meuForm.addEventListener("submit", function criarPostController(infoDoPost)
{
    infoDoPost.preventDefault();
    console.log("estamos criando um post");

    const campoCriarPost = document.getElementById("campoCriarPost");

    criarPost({conteudo: campoCriarPost.value});
    campoCriarPost.value = "";

})
//CRUD Delete
document.querySelector(".listaDePosts")
    .addEventListener("click", function (infoDoPost)
    {
        console.log("houve um click no botão delete");

        const elementoAtual = infoDoPost.target;
        const isBtnDeleteClick = infoDoPost.target;
            classList.constains("btn-delete");

        if (isBtnDeleteClick){
            const id = elementoAtual.parentNode.getAttribute("data-id");

            apagarPost(id);
            elementoAtual.parentNode.remove();
        }
    })

function criarPost(dados)
{
    const idPost = Date.now();

    posts.push({
        id : idPost, 
        conteudo: dados.conteudo,
    });

    const listaDePosts = document.querySelector(".listaDePosts");

    listaDePosts.insertAdjacentHTML("afterbegin", `<li data-id="${idPost}">
    <span contenteditable>
        ${dados.conteudo}
    </span>
    <button class="btn-delete">Apagar</button>
    </li>

    `);
}