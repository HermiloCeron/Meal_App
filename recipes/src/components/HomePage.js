import React,{Component} from 'react';

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  // console.log(props.areas);
  // console.log(props.categories);
  // console.log(props.ingredients);
  render(){
    return(
      <div>
        <div>Inside HomePage</div>

        <div>Search by category</div>

        <form onSubmit={(e)=>{this.props.searchCategory(e)}} >
          <label htmlFor='category'> </label>
          <select name='category'>
            {this.props.categories.map((category,index)=>(
              <option
                key={'category-seacrh-option-'+index}
                value={this.props.categories[index]}
              >
                {this.props.categories[index]}
              </option>
            ))}
          </select>
          <input type='submit' value='Search'/>
        </form>


        <div>Search by area</div>

        <form onSubmit={(e)=>{this.props.searchArea(e)}} >
          <label htmlFor='area'> </label>
          <select name='area'>
            {this.props.areas.map((area,index)=>(
              <option
                key={'area-seacrh-option-'+index}
                value={this.props.areas[index]}
              >
                {this.props.areas[index]}
              </option>
            ))}
          </select>
          <input type='submit' value='Search'/>
        </form>

      </div>
    )
  }
}

export default HomePage;
