import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import Banner from "./components/Banner";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Grey Chair',
          img: 'grey-chair.jpeg',
          desc: 'Kitchen chair upholstered in velor without armrests. The anatomical shape of the seat provides comfort, and the decorative tie adds volume and protects against dents. Metal legs with a cross-shaped frame can withstand significant loads. The foot pads will not damage the flooring and prevent slipping. Laconic design will decorate any kitchen interior. The lock on the back of the chair is decorative and is not designed to remove the upholstery.',
          category: 'chairs',
          price: '20.00'
        },
        {
          id: 2,
          title: 'Black oak table',
          img: 'Black oak table.jpeg',
          desc: 'The extendable dining table is designed in a geometric style in accordance with the requirements for a private interior. The model attracts attention with a beautiful countertop and strict supports. Its size allows link 8-10 people.',
          category: 'tables',
          price: '189.99'
        },
        {
          id: 3,
          title: 'Black leather ottoman',
          img: 'Black leather ottoman.jpeg',
          desc: 'Designer pouffe made of beautiful and environmentally friendly materials. Upholstery - more than three hundred types of upholstery to choose from.',
          category: 'couches',
          price: '89.99'
        },
        {
          id: 4,
          title: 'Sofa orange vintage leather',
          img: 'Sofa orange vintage leather.jpeg',
          desc: 'Designer sofa made of beautiful and environmentally friendly materials. Upholstery - more than three hundred types of upholstery to choose from.',
          category: 'sofas',
          price: '250.00'
        },
        {
          id: 5,
          title: 'White wood Closet',
          img: 'White wood cabinet.jpeg',
          desc: 'We present you a 2-door linen closet Verdun. Elegant and roomy at the same time, it is made in a classic style with light touches of Provence. Curly legs, classic curves on the fronts of the doors and the plinth give the product from this series a special charm and attract the eye. Pin loops are used on the facades in the collection, which only emphasizes the Provence style. wardrobe from the collection "Verden" will be a useful decoration for your interior.',
          category: 'сabinets',
          price: '500.00'
        },
        {
          id: 6,
          title: 'Leather armchair',
          img: 'Leather armchair.jpeg',
          desc: 'The Manchester Classic armchair is an incredibly beautiful designer furniture, as if descended from the pages of ancient chronicles about proud knights and great monarchs, but at the same time magically embodying new design achievements in the world of art and technology. Not yielding to the harmony of style even of Italian furniture, the MANCHESTER CLASSIC armchair, presented in the VIP sofas catalog, becomes exactly the acquisition that will delight several generations, turning into a real rarity.',
          category: 'armchair',
          price: '5000.00'
        }
      ],
      images: [
        { src: "./img/white-armchair-r.jpeg" },
        { src: "./img/white-armchair.jpeg" },
        { src: "./img/white-armchair-b.jpeg" },
        { src: "./img/Black-Velvet-Sofa.jpg" },
        { src: "./img/Black-Velvet-Sofa-b.jpg" },
        { src: "./img/Black-Velvet-Sofa-x.jpg" },
        { src: "./img/woodtable.jpg" },
        { src: "./img/woodtable-app.jpg" },
        { src: "./img/woodtable-at.jpg" }
      ],

      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
        <Banner
          title="White Leather Armchair"
          header="COMING SOON"
          link="#!"
          subtitle="Coming Soon"
          img={["./img/white-armchair-r.jpeg", "./img/white-armchair.jpeg", "./img/white-armchair-b.jpeg"]}
        />
        <Banner
          title="Black Sofa"
          header=""
          link="#!"
          subtitle="Coming Soon"
          img={["./img/Black-Velvet-Sofa.jpg", "./img/Black-Velvet-Sofa-b.jpg", "./img/Black-Velvet-Sofa-x.jpg"]}
        />
        <Banner
          title="Wood Table"
          header=""
          link="#!"
          subtitle="Coming Soon"
          img={["./img/woodtable.jpg", "./img/woodtable-app.jpg", "./img/woodtable-at.jpg"]}
        />
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  addToOrder(item) {
    const exist = this.state.orders.find((el) => el.id === item.id);

    if (!exist) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }
}


export default App;
