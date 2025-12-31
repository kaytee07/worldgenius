const teeandcap = "Delivery will be made 3 to 5 business days after your order.";
const jersey = "Delivery will be made 10 to 12 business days after your order."


export const navigation = [ 
    {
        name: "Shop",
        url:"/shop"
    },
    { 
        name: "Gallery",
        url:"/gallery"
    },
    {
        name: "Press",
        url:"/press"
    },
]

export const press = [
    {
        img: "https://i.ytimg.com/vi/jUO0dUHJeSo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADD9hmVeFk2aVIWKgMjRNO923oIg",
        link: "https://imullar.com/2024/08/20/editors-choice-ghanaian-streetwear-brands-you-should-know/ "
    }
]

export const dashnav = [ 
    {
        name: "Dashboard"
    },
    {
        name: "Pending Oders",
    },
    {
        name: "Delivered Orders",
    },
    {
        name: "Products"
    }
]

export const bestSelling = {

    gtaaccrashirtcream:{
        id: 0,
        name: "GTA ACCRA SHIRT CREAM",
        price: 250.00,
        img: "/img/gtacream.jpg",
        sizes: [
                       {
                name: "S",
                quantity: 90
            },
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
             {
                name: "3XL",
                quantity: 55
            }
        ],
        colors:[
            {
                name: "Cream",
                code: "CEBA7C"
            },
           
        ],
        quantity: 8,
        otherImages: []
    },
    ineedspacetops:{
        id: 2,
        name: "I NEED SPACE TOPS",
        price: 200.00,
        img: "/img/ineedspace.jpg",
        sizes: [
                       {
                name: "S",
                quantity: 90
            },
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
             {
                name: "3XL",
                quantity: 55
            },
             {
                name: "4XL",
                quantity: 55
            }
        ],
        colors:[
            {
                name: "Black",
                code: "88498F"
            },
           
        ],
        quantity: 7,
        otherImages: []
    },
    dndtruckercap:{
        id: 1,
        name: "DND TRUCKER CAP",
        price: 100.00,
        img: "/img/dndcap.jpg",
        sizes: [
            {
                name: "SAME SIZE",
                quantity: 20
            },
            
        ],
        colors:[
            {
                name: "Red and black",
                code: "e71016"
            },
           
        ],
        quantity: 7,
        otherImages: []
    },
}

export const products = {
    gtaaccrashirtcream: {
        id: 0,
        name: "GTA ACCRA SHIRT CREAM",
        price: 250.00,
        discountedPrice: 200.00,
        img: "/img/gtacream.jpg",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/gtacream.jpg"]
    },
    gtaaccrashirtgrey: {
        id: 0,
        name: "GTA ACCRA SHIRT GREY",
        price: 250.00,
        discountedPrice: 200.00,
        img: "/img/gtagrey.jpg",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Grey",
                code: "3A3A3A"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/gtagrey.jpg"]
    },
    gtaaccrashirtwhite: {
        id: 0,
        name: "GTA ACCRA SHIRT WHITE",
        price: 250.00,
        discountedPrice: 200.00,
        img: "/img/gtawhite.jpg",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "White",
                code: "FFFFFF"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/gtawhite.jpg"]
    },
    gtaaccrashirtblack: {
        id: 0,
        name: "GTA ACCRA SHIRT BLACK",
        price: 250.00,
        discountedPrice: 200.00,
        img: "/img/gtablack.jpg",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Black",
                code: "000000"
            }
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/gtablack.jpg"]
    },
    boneshakerwhiteshirt: {
        id: 0,
        name: "BONE SHAKER WHITE SHIRT",
        price: 220.00,
        discountedPrice: 176.00,
        img: "/img/boneshakerteeshirt.png",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Black",
                code: "000000"
            }
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/boneshakerteeshirt.png"]
    },
    topoftheworldtruckercapblackandwhite: {
        id: 1,
        name: "TOP OF THE WORLD TRUCKER CAP BLACK AND WHITE",
        price: 100.00,
        discountedPrice: 80.00,
        img: "/img/topoftheworldblackandwhite.png",
        sizes: [
            {
                name: "SAME SIZE",
                quantity: 20
            },
        ],
        colors: [
            {
                name: "black and white",
                code: "e71016"
            },
        ],
        quantity: 7,
        otherImages: ["/img/topoftheworldblackandwhite.png"]
    },
    boneshakersweatshirt: {
        id: 0,
        name: "BONE SHAKER SWEATSHIRT",
        price: 380.00,
        discountedPrice: 304.00,
        img: "/img/boneshakersweaterArtboard-1.png",
        sizes: [
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 55
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/boneshakersweaterArtboard-1.png", "/img/boneshakersweaterArtboard-2.png"]
    },
    dndtruckercap: {
        id: 1,
        name: "DND TRUCKER CAP",
        price: 100.00,
        discountedPrice: 80.00,
        img: "/img/dndcap.jpg",
        sizes: [
            {
                name: "SAME SIZE",
                quantity: 20
            },
        ],
        colors: [
            {
                name: "Red and black",
                code: "e71016"
            },
        ],
        quantity: 7,
        delivery: teeandcap,
        otherImages: ["/img/dndcap.jpg"]
    },
    gothicsweatshorts: {
        id: 0,
        name: "GOTHIC SWEAT SHORTS",
        price: 280.00,
        discountedPrice: 224.00,
        img: "/img/summershorts.png",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/summershorts.png"]
    },
    ineedspacetops: {
        id: 2,
        name: "I NEED SPACE TOPS",
        price: 200.00,
        discountedPrice: 160.00,
        img: "/img/ineedspace.jpg",
        sizes: [
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Black",
                code: "88498F"
            },
        ],
        quantity: 7,
        delivery: teeandcap,
        otherImages: ["/img/ineedspace.jpg"]
    },
}
// ghanaboysshirt:{
    //     id: 2,
    //     name: "GHANA BOYS SHIRT",
    //     price: 200.00,
    //     img: "/img/ghanaboysblack.jpg",
    //     sizes: [
                
    //         {
    //             name: "M",
    //             quantity: 30
    //         },
    //         {
    //             name: "L",
    //             quantity: 30
    //         },
    //         {
    //             name: "XL",
    //             quantity: 55
    //         },
    //         {
    //             name: "2XL",
    //             quantity: 55
    //         },
    //          {
    //             name: "3XL",
    //             quantity: 55
    //         },
    //          {
    //             name: "4XL",
    //             quantity: 55
    //         }
    //     ],
    //     colors:[
    //         {
    //             name: "Black",
    //             code: "88498F"
    //         },
           
    //     ],
    //     quantity: 7,
    //     otherImages: ["/img/ghanaboysblack.jpg"]
    // },


