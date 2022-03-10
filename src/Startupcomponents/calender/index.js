
import { ScheduleComponent , Inject ,
Week, ViewsDirective, ViewDirective, DragAndDrop , Resize,
Day, WorkWeek, Month
} from '@syncfusion/ej2-react-schedule';


export const Calender = ({ data })=>{

   

   const localData = {

    dataSource:data,
    fields : {

        endTime : { name : 'End'},
        startTime: { name : 'Start'},
        subject: { name : 'Summary', default: 'No title is provided' }
    }
   } 

    return (
        <ScheduleComponent currentView='Week'
        height='570px' 
        selectedDate={new Date(2019, 0, 11)}
          eventSettings={localData} >
          <ViewsDirective>
              <ViewDirective option='Week' ></ViewDirective>
              <ViewDirective option='Day' ></ViewDirective>
              <ViewDirective option='WorkWeek' ></ViewDirective>
              <ViewDirective option='Month' ></ViewDirective>

          </ViewsDirective>
        <Inject  services={[Week, DragAndDrop , Resize, 
        Day, WorkWeek, Month
        ]}  />
        </ScheduleComponent>
    )

}