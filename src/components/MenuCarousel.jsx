import React, { Component } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import items from "../data/menu.json";
import { Link } from "react-router-dom";

class MenuCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  // handleCarouselClick = item => {
  //   this.props.onDishSelected(item);
  // };

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.id}>
          <Link to={"/dishdetails/" + item.id}>
            <img
              style={{ cursor: "pointer" }}
              src={item.image}
              alt={item.name}
              // onClick={() => this.props.onDishSelected(item)}
            />
          </Link>
          <CarouselCaption captionText={item.description} captionHeader={item.name} />
        </CarouselItem>
      );
    });

    return (
      <div className="container menuCarousel" style={{ maxWidth: 400, margin: "0 auto" }}>
        {this.props.children}
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default MenuCarousel;
