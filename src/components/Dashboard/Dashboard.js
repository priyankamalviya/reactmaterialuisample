import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import {Card, CardActions, CardText} from 'material-ui/Card';
import {Responsive, WidthProvider} from 'react-grid-layout';
import IconButton from 'material-ui/IconButton';
const ResponsiveReactGridLayout = WidthProvider(Responsive);;
import {onLayoutChange} from '../../actions/dashboard';
import Activity from '../../components/Activity/Activity';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import  '../../../static/images/semesnica.jpg';
import  '../../../static/images/bih.png';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
  color: 'blue'
};


let layoutToSave=undefined;

class Dashboard extends Component{

  constructor(props) {
    super(props)
  };

  render(){

    function handleLayoutChange(layout){
      layoutToSave=layout;
    };

    const { messages, browser, dashboard} = this.props

    var layout = [
      {i: '1', x: 1.5, y: 3, w: 4, h: 2,isResizable:false}
    ];


    var layouts = dashboard.layout?{lg:dashboard.layout}:{lg:layout}


    return (

      <Activity title={messages.dashboard}  >
        <div>
          <ResponsiveReactGridLayout
            isDraggable={browser.greaterThan.medium}
            isResizable={browser.greaterThan.medium}
            onLayoutChange={handleLayoutChange}
            className="layout"
            layouts={layouts}
            autoSize={true}
            breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
            ref="grid"
            >

            <Card key={"1"}>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
              <CardActions>
                <IconButton > <i className="material-icons" style={{color: 'blue'}}></i></IconButton>
                <IconButton label="Refresh" ><i className="material-icons" style={{color: 'blue'}}></i></IconButton>
              </CardActions>
            </Card>
          </ResponsiveReactGridLayout>
        </div>
      </Activity>

    );
  }
};


Dashboard.propTypes = {
  onLayoutChange: PropTypes.func.isRequired,
  dashboard: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
}


export default (Dashboard);
