let num_cards_GLOBAL = 5
const DEFAULT_CAROUSELS = document.getElementsByClassName("default-carousel")

let cards = [
  {
    background:
      "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmoviefail.com%2Fwp-content%2Fuploads%2F2014%2F11%2Finterstellar1.jpeg&f=1&nofb=1",
    display_background:
      "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhdqwalls.com%2Fdownload%2Finterstellar-gargantua-u4-1920x1080.jpg&f=1&nofb=1",
    title: "Interstellar",
    description:
      "Assista a este filme incrível feito por pessoas incríveis!"
  },
  {
    background: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/424CA51559C2252BB245D6D2406A31E77D037DA5E7C12D3B1F19CB11E72699D4/scale?width=1200&aspectRatio=1.78&format=jpeg",
    display_background:
      "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.alphacoders.com%2F845%2F84502.jpg&f=1&nofb=1",
    title: "Os Simpsons",
    description:
      "Assista a este filme incrível feito por pessoas incríveis!"
  },
  {
    background:
      "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F41%2F1%2Fhj197K.jpg&f=1&nofb=1",
    display_background:
      "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages7.alphacoders.com%2F990%2F990610.jpg&f=1&nofb=1",
    title: "Avengers: Endgame",
    description:
      "Assista a este filme incrível feito por pessoas incríveis!"
  },
  {
    background:
      "https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=545&format=webp&quality=91&imagick=/wp-content/uploads/2022/11/Garfield_Frontiers_Imagem_YouTube_Xeznia.jpg",
    display_background:
      "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fjoker-stair-dance_68124_1920x1080.jpg&f=1&nofb=1",
    title: "Garfield",
    description:
      "Assista a este filme incrível feito por pessoas incríveis!"
  },
  {
    background:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4uPJjyDq24GQKHP5xa1iJmIb6hlpMEUE2g&usqp=CAU",
    title: "Perna Longa",
    description:
      "Assista a este filme incrível feito por pessoas incríveis!"
  },
  {
    background:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHqS4wBuktODsSNWGGN60N4Oxabd6ayTkjw&usqp=CAU",
    title: "Turma da Mônica",
    description:
      "Assista a este filme incrível feito por pessoas incríveis!"
  },
  {
    background:
      "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F9%2F6%2F8%2F126147.jpg&f=1&nofb=1",
    title: "Star Wars: A New Hope",
    description:
      "Assista a este filme incrível feito por pessoas incríveis!"
  },
  {
    background:
      "data:image/jpeg;base64,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",
    title: "Beyblade",
    description:
      "Assista a este filme incrível feito por pessoas incríveis!"
  },
  {
    background:
      "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F2%2F6%2F8%2F123320-lord-of-the-rings-background-1920x1080-picture.jpg&f=1&nofb=1",
    title: "Lord of the Rings",
    description:
      "Assista a este filme incrível feito por pessoas incríveis!"
  }
]

let cast = [
  {
    picture:
      "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2F338040ea81df8012c152cfa65a4c1b440a94a1bc&f=1&nofb=1",
    square: 1000,
    name: "Will Smith"
  },
  {
    picture:
      "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsiskiyou.sou.edu%2Fwp-content%2Fuploads%2F2014%2F10%2FRobin.jpg&f=1&nofb=1",
    square: 2000,
    name: "Robin Williams"
  },
  {
    picture:
      "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.byrdie.com%2Fthmb%2FaSjYcUqubm-ucpugLMuN8m-nvdU%3D%2F796x700%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fcdn.cliqueinc.com__cache__posts__237400__jennifer-lawrence-hairstyles-237400-1506716140954-main.700x0c-af3f438528ea44f0aa9c3c1fe3ef8c64.jpg&f=1&nofb=1",
    square: 700,
    name: "Jennifer Lawrence"
  }
]

const IsMobile = () => {
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.getElementsByTagName("body")[0].clientWidth

  if (width <= 736) {
    return true
  } else {
    return false
  }
}

const CheckSizeAttributes = (carousels = DEFAULT_CAROUSELS) => {
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.getElementsByTagName("body")[0].clientWidth

  // let carousels = document.getElementsByClassName("card-carousel")

  let old_num_cards = num_cards_GLOBAL
  let new_num_cards

  if (width > 1501) {
    new_num_cards = 5
  } else if (width <= 1500 && width > 1100) {
    new_num_cards = 4
  } else if (width <= 1100 && width > 520) {
    new_num_cards = 3
  } else if (width <= 520) {
    new_num_cards = 2
  }

  for (let i = 0; i < carousels.length; i++) {
    if (carousels[i].children.length > 2) {
      for (let j = 1; j < carousels[i].children.length - 1; j++) {
        carousels[i].children[j].style.display = "none"
      }
      for (let j = 1; j < new_num_cards + 1; j++) {
        carousels[i].children[j].style.display = "flex"
      }
    }
  }

  num_cards_GLOBAL = new_num_cards
}

const ResizeHeader = () => {
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.getElementsByTagName("body")[0].clientWidth

  if (width <= 815) {
    if (document.getElementsByClassName("hamburger").length <= 0) {
      let header = document.getElementsByClassName("header")[0]
      let main_nav = header.getElementsByClassName("main-nav")[0]
      let right_nav = header.getElementsByClassName("right-nav")[0]

      let hamburger = document.createElement("div")
      hamburger.classList.add("hamburger")
      hamburger.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>`
      main_nav.remove()
      right_nav.remove()

      let bottom_header = document.createElement("div")
      bottom_header.classList.add("header-bottom")
      bottom_header.append(main_nav, right_nav)
      bottom_header.style.display = "none"

      hamburger.addEventListener("click", function () {
        if (bottom_header.style.display == "none") {
          bottom_header.style.display = "flex"
          header.style.paddingBottom = "9px"
          header.style.paddingTop = "9px"
        } else {
          bottom_header.style.display = "none"
          header.style.paddingBottom = "0px"
          header.style.paddingTop = "0px"
        }
      })

      header.classList.add("header-change")

      let top_header = document.createElement("div")
      top_header.classList.add("header-top")
      top_header.append(header.children[0], hamburger)

      header.innerHTML = ""
      header.append(top_header, bottom_header)
    }
  } else {
    if (document.getElementsByClassName("hamburger").length > 0) {
      let header = document.getElementsByClassName("header")[0]
      let main_nav = header.getElementsByClassName("main-nav")[0]
      let right_nav = header.getElementsByClassName("right-nav")[0]
      let brand = header.getElementsByClassName("brand")[0]

      header.classList.remove("header-change")
      header.children[0].remove()
      header.children[0].remove()
      header.append(brand, main_nav, right_nav)
    }
  }
}

const AddDefaultCards = (carousels = DEFAULT_CAROUSELS) => {
  let carousel_width = carousels[0]
    .clientWidth

  let btn_width =
    document.getElementsByClassName("carousel-btn")[0].clientWidth +
    document.getElementsByClassName("carousel-btn")[1].clientWidth

  let num_cards = num_cards_GLOBAL
  let card_margin = 2
  let initial_width = 1920
  let initial_height = 1080

  let scale =
    (100 * ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
    initial_width

  let content_titles = document.getElementsByClassName("content-title")

  for (let i = 0; i < content_titles.length; i++) {
    content_titles[i].style.marginLeft = `${card_margin}px`
  }

  // let carousels = document.getElementsByClassName("card-carousel")
  for (let i = 0; i < carousels.length; i++) {
    let not_chosen = []

    for (let c = 0; c < cards.length; c++) {
      not_chosen.push(c)
    }

    for (let j = 0; j < cards.length; j++) {
      let chosen_index = Math.floor(Math.random() * not_chosen.length)

      let chosen_card = cards[not_chosen[chosen_index]]

      not_chosen.splice(chosen_index, 1)

      let card = document.createElement("div")
      card.classList.add("card")
      card.style.backgroundImage = `url(${chosen_card.background})`

      //If image doesn't load
      card.style.backgroundColor = `#333`

      card.style.width = initial_width * (scale / 100) + "px"
      card.style.height = initial_height * (scale / 100) + "px"
      card.style.margin = `0px ${card_margin}px`
      card.style.minWidth = initial_width * (scale / 100) + "px"
      card.style.minHeight = initial_height * (scale / 100) + "px"

      let overlay = document.createElement("div")
      overlay.classList.add("overlay")

      let title = document.createElement("h4")
      title.innerText = chosen_card.title
      let description = document.createElement("p")
      description.innerText = "1h 22min"

      let button_container = document.createElement("div")
      button_container.classList.add("button-container")

      let button1 = document.createElement("div")
      button1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>`
      button1.classList.add("watch")

      button1.addEventListener('click', function () { PlayVideo("00") })

      let button2 = document.createElement("div")
      button2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>`
      button2.classList.add("queue")

      button2.addEventListener("click", function () {
        ToggleWatchLater(`${chosen_card.title}`)
      })

      let button3 = document.createElement("div")
      button3.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`
      button3.classList.add("star")
      button3.classList.add("queue")

      button3.addEventListener("click", function () {
        if (button3.children[0].style.color != "rgb(255, 255, 87)") {
          button3.children[0].style.color = "rgb(255, 255, 87)"
        } else {
          button3.children[0].style.color = "white"
        }
      })

      let button4 = document.createElement("div")
      button4.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`
      button4.classList.add("star")
      button4.classList.add("queue")

      button4.addEventListener("click", function () {
        if (document.getElementsByClassName("movie-desc").length > 0) {
          // If the modal exists
          document.getElementsByClassName("movie-desc")[0].remove()
        } else {
          let modal = document.createElement("div")
          modal.classList.add("movie-desc")

          let modal_content = document.createElement("div")
          modal_content.classList.add("modal-content")

          let bg_image = document.createElement("div")
          bg_image.classList.add("desc-image")
          bg_image.style.backgroundImage = `url(${chosen_card.background})`
          let image_cover = document.createElement("div")

          let close_btn = document.createElement("div")
          close_btn.classList.add("close-btn")
          close_btn.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`

          close_btn.addEventListener("click", function () {
            this.parentElement.parentElement.parentElement.parentElement.remove()
          })

          image_cover.append(close_btn)
          bg_image.append(image_cover)

          let top_info = document.createElement("div")
          top_info.classList.add("desc-top")
          let title = document.createElement("h1")
          title.innerText = chosen_card.title

          let btn_selection = document.createElement("div")
          btn_selection.classList.add("button-selection")
          btn_selection.innerHTML = `
                        <div class="watch" onclick="PlayVideo('${chosen_card.show_id}');">
                            <h3>Play</h3>
                            <svg fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                        </div>
                        <div class="queue" onclick="ToggleWatchLater('${chosen_card.title}');">
                            <h3>Watch Later</h3>
                            <svg fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>`

          top_info.append(title, btn_selection)

          let mid_info = document.createElement("div")
          mid_info.classList.add("desc-mid")
          mid_info.innerHTML = `<p>${chosen_card.description}</p>`

          let bottom_info = document.createElement("div")
          bottom_info.classList.add("desc-bottom")

          let cast_slider = document.createElement("div")
          cast_slider.classList.add("cast")

          bottom_info.append(cast_slider)

          modal_content.append(
            bg_image,
            top_info,
            mid_info,
            bottom_info
          )
          modal.append(modal_content)

          document.body.append(modal)

          document.body.addEventListener("click", function (event) {
            if (!event.target.classList.contains("modal-content")) {
              //modal.remove();
            }
          })

          // Set the height for the modal image
          let total_width = document.getElementsByClassName(
            "modal-content"
          )[0].clientWidth
          let large_scale = (100 * total_width) / 1920
          document.getElementsByClassName(
            "desc-image"
          )[0].style.height = `${1080 * (large_scale / 100)}px`

          // Set image for cast
          for (let c = 0; c < cast.length; c++) {
            let cast_block = document.createElement("div")
            cast_block.classList.add("cast-card")
            cast_block.style.backgroundImage = `url("${cast[c].picture}")`
            cast_block.style.width = 100 / cast.length - 5 + "%"
            cast_block.style.height = `calc(${document.getElementsByClassName("cast")[0]
              .clientWidth / cast.length
              }"px" - 5%)`
            cast_slider.append(cast_block)
          }
        }
      })

      button_container.append(button1, button2, button3, button4)

      overlay.append(title, description, button_container)
      card.append(overlay)
      if (j < num_cards) {
        carousels[i].insertBefore(
          card,
          carousels[i].children[carousels[i].children.length - 1]
        )
      } else {
        card.style.display = "none"
        carousels[i].insertBefore(
          card,
          carousels[i].children[carousels[i].children.length - 1]
        )
      }
    }
  }
}

const AddBrowseSearchCards = ({ cards, itemsPerLine }) => {
  const cardsCopy = [...cards]
  const carouselsAmount = cardsCopy.length / itemsPerLine
  const browseSearchDiv = document.getElementById('browseSearch')

  const carousels = []
  for (let i = 0; i < carouselsAmount; i++) {
    const carousel = document.createElement('div')
    carousel.classList.add('my-carousel', 'card-carousel')
    browseSearchDiv.append(carousel)
    carousels.push(carousel)
  }

  let carousel_width = carousels[0].clientWidth
  let btn_width = 0

  let card_margin = 2
  let initial_width = 1920
  let initial_height = 1080

  let scale =
    (100 * ((carousel_width - btn_width) / itemsPerLine - card_margin * 2)) /
    initial_width

  let content_titles = browseSearchDiv.getElementsByClassName("content-title")

  for (let i = 0; i < content_titles.length; i++) {
    content_titles[i].style.marginLeft = `${card_margin}px`
  }

  for (let i = 0; i < carousels.length; i++) {
    const actualCards = cardsCopy.splice(0, itemsPerLine)
    for (const chosen_card of actualCards) {
      let card = document.createElement("div")
      card.classList.add("card")
      card.style.backgroundImage = `url(${chosen_card.background})`

      //If image doesn't load
      card.style.backgroundColor = `#333`

      card.style.width = initial_width * (scale / 100) + "px"
      card.style.height = initial_height * (scale / 100) + "px"
      card.style.margin = `0px ${card_margin}px`
      card.style.minWidth = initial_width * (scale / 100) + "px"
      card.style.minHeight = initial_height * (scale / 100) + "px"

      let overlay = document.createElement("div")
      overlay.classList.add("overlay")

      let title = document.createElement("h4")
      title.innerText = chosen_card.title
      let description = document.createElement("p")
      description.innerText = chosen_card.duration

      let button_container = document.createElement("div")
      button_container.classList.add("button-container")

      let button1 = document.createElement("div")
      button1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>`
      button1.classList.add("watch")
      button1.addEventListener('click', function () { PlayVideo(chosen_card.show_id) })

      let button2 = document.createElement("div")
      button2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>`
      button2.classList.add("queue")

      button2.addEventListener("click", function () {
        ToggleWatchLater(`${chosen_card.title}`)
      })

      let button3 = document.createElement("div")
      button3.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`
      button3.classList.add("star")
      button3.classList.add("queue")

      button3.addEventListener("click", function () {
        if (button3.children[0].style.color != "rgb(255, 255, 87)") {
          button3.children[0].style.color = "rgb(255, 255, 87)"
        } else {
          button3.children[0].style.color = "white"
        }
      })

      let button4 = document.createElement("div")
      button4.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`
      button4.classList.add("star")
      button4.classList.add("queue")

      button4.addEventListener("click", function () {
        if (document.getElementsByClassName("movie-desc").length > 0) {
          // If the modal exists
          document.getElementsByClassName("movie-desc")[0].remove()
        } else {
          let modal = document.createElement("div")
          modal.classList.add("movie-desc")

          let modal_content = document.createElement("div")
          modal_content.classList.add("modal-content")

          let bg_image = document.createElement("div")
          bg_image.classList.add("desc-image")
          bg_image.style.backgroundImage = `url(${chosen_card.background})`
          let image_cover = document.createElement("div")

          let close_btn = document.createElement("div")
          close_btn.classList.add("close-btn")
          close_btn.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`

          close_btn.addEventListener("click", function () {
            this.parentElement.parentElement.parentElement.parentElement.remove()
          })

          image_cover.append(close_btn)
          bg_image.append(image_cover)

          let top_info = document.createElement("div")
          top_info.classList.add("desc-top")
          let title = document.createElement("h1")
          title.innerText = chosen_card.title

          let btn_selection = document.createElement("div")
          btn_selection.classList.add("button-selection")
          btn_selection.innerHTML = `
                        <div class="watch" onclick="PlayVideo('${chosen_card.show_id}');">
                            <h3>Play</h3>
                            <svg fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                        </div>
                        <div class="queue" onclick="ToggleWatchLater('${chosen_card.title}');">
                            <h3>Watch Later</h3>
                            <svg fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>`

          top_info.append(title, btn_selection)

          let mid_info = document.createElement("div")
          mid_info.classList.add("desc-mid")
          mid_info.innerHTML = `<p>${chosen_card.description}</p>`

          let bottom_info = document.createElement("div")
          bottom_info.classList.add("desc-bottom")

          let cast_slider = document.createElement("div")
          cast_slider.classList.add("cast")

          bottom_info.append(cast_slider)

          modal_content.append(
            bg_image,
            top_info,
            mid_info,
            bottom_info
          )
          modal.append(modal_content)

          document.body.append(modal)

          document.body.addEventListener("click", function (event) {
            if (!event.target.classList.contains("modal-content")) {
              //modal.remove();
            }
          })

          // Set the height for the modal image
          let total_width = document.getElementsByClassName(
            "modal-content"
          )[0].clientWidth
          let large_scale = (100 * total_width) / 1920
          document.getElementsByClassName(
            "desc-image"
          )[0].style.height = `${1080 * (large_scale / 100)}px`

          // Set image for cast
          for (let c = 0; c < cast.length; c++) {
            let cast_block = document.createElement("div")
            cast_block.classList.add("cast-card")
            cast_block.style.backgroundImage = `url("${cast[c].picture}")`
            cast_block.style.width = 100 / cast.length - 5 + "%"
            cast_block.style.height = `calc(${document.getElementsByClassName("cast")[0]
              .clientWidth / cast.length
              }"px" - 5%)`
            cast_slider.append(cast_block)
          }
        }
      })

      button_container.append(button1, button2, button3, button4)

      overlay.append(title, description, button_container)
      card.append(overlay)

      carousels[i].insertBefore(
        card,
        carousels[i].children[carousels[i].children.length - 1]
      )
    }
  }
}

const CheckCards = (carousels = DEFAULT_CAROUSELS, num_cards = num_cards_GLOBAL) => {
  // let carousels = document.getElementsByClassName("card-carousel")

  for (let i = 0; i < carousels.length; i++) {
    let carousel_width = carousels[i].clientWidth

    let btn_width =
      (carousels[i].getElementsByClassName("carousel-btn")?.[0]?.clientWidth +
        carousels[i].getElementsByClassName("carousel-btn")?.[1]?.clientWidth) ?? 10

    // let num_cards = num_cards_GLOBAL
    let card_margin = 2
    let initial_width = 1920
    let initial_height = 1080

    let scale =
      (100 *
        ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
      initial_width

    let cards = carousels[i].getElementsByClassName("card")

    for (let i = 0; i < cards.length; i++) {
      cards[i].style.width = initial_width * (scale / 100) + "px"
      cards[i].style.height = initial_height * (scale / 100) + "px"
      cards[i].style.margin = `0px ${card_margin}px`
      cards[i].style.minWidth = initial_width * (scale / 100) + "px"
      cards[i].style.minHeight = initial_height * (scale / 100) + "px"
    }

    if (IsMobile()) {
      carousels[i].style.height = 1.6 * (initial_height * (scale / 100)) + "px"
    } else {
      carousels[i].style.height = "auto"
    }
  }
}

const AddCarouselButtons = (carousels = DEFAULT_CAROUSELS) => {
  // let carousels = document.getElementsByClassName("card-carousel")
  for (let i = 0; i < carousels.length; i++) {
    let btn1 = document.createElement("div")
    btn1.classList.add("carousel-btn")
    btn1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Previous(this);">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>`

    let btn2 = document.createElement("div")
    btn2.classList.add("carousel-btn")

    btn2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Next(this);">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>`

    carousels[i].append(btn1, btn2)
  }
}

const ScrollFunction = () => {
  let header = document.getElementsByClassName("header")[0]
  if (document.documentElement.scrollTop > 1) {
    header.classList.add("header-active")
  } else {
    header.classList.remove("header-active")
  }
}

const MakeJumbotron = () => {
  let height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.getElementsByTagName("body")[0].clientHeight

  document.getElementsByClassName("top")[0].style.height = `${height}px`
}

let slide_index = 0

const SmoothScroll = (id) => {
  let element = document.getElementById(id)
  element.scrollIntoView({ behavior: "smooth", block: "center" })
}

const Next = (elem) => {
  let carousel = elem.parentElement.parentElement
  let first_elem = carousel.children[1]
  let next_elem

  for (let i = 0; i < carousel.children.length; i++) {
    if (carousel.children[i].style.display == "none") {
      next_elem = carousel.children[i]
      break
    }
  }

  first_elem.style.display = "none"
  first_elem.remove()
  carousel.insertBefore(
    first_elem,
    carousel.children[carousel.children.length - 1]
  )

  next_elem.style.display = "flex"
}

const Previous = (elem) => {
  let carousel = elem.parentElement.parentElement
  let last_display_item
  let prev_elem = carousel.children[carousel.children.length - 2]

  for (let i = 0; i < carousel.children.length; i++) {
    if (
      carousel.children[i].style.display != "none" &&
      !carousel.children[i].classList.contains("carousel-btn")
    ) {
      last_display_item = carousel.children[i]
    }
  }

  last_display_item.style.display = "none"

  carousel.insertBefore(prev_elem, carousel.children[1])

  prev_elem.style.display = "flex"
}

const ToggleWatchLater = (movie = "", activate = true) => {
  let modal = document.getElementsByClassName("watch-later-modal")[0]

  if (movie != "") {
    modal.getElementsByClassName("movie")[0].innerText = movie
  }

  if (activate) {
    modal.style.display = "flex"
  } else {
    modal.style.display = "none"
  }
}

const PlayVideo = (movieTitle) => {
  const [rootPath] = window.location.href.split('/pages/')
  window.location.href = `${rootPath}/pages/video-player?title=${movieTitle}`
}

const Initialize = () => {
  AddCarouselButtons()
  CheckSizeAttributes()
  AddDefaultCards()
  MakeJumbotron()
  CheckCards()
  ResizeHeader()
  const body = document.getElementById('body')
  body.onscroll = () => ScrollFunction()
}

window.addEventListener('load', () => {
  Initialize()
})

window.IsMobile = IsMobile
window.CheckSizeAttributes = CheckSizeAttributes
window.ResizeHeader = ResizeHeader
window.AddCardsOnBrowseSearchGrid = AddBrowseSearchCards
window.CheckCards = CheckCards
window.AddCarouselButtons = AddCarouselButtons
window.ScrollFunction = ScrollFunction
window.MakeJumbotron = MakeJumbotron
window.SmoothScroll = SmoothScroll
window.Next = Next
window.Previous = Previous
window.ToggleWatchLater = ToggleWatchLater
window.PlayVideo = PlayVideo
