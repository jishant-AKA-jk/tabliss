import React, { FC, useEffect } from "react";
// import GitHubCalendar from "github-calendar";
import { Props, defaultData } from "./types";
import GitHubCalendar, { ThemeInput } from 'react-github-calendar';
import "github-calendar/dist/github-calendar.css";
import "./github-calendar.css";

// TODO: Inherit size and colour

const GitHubCalendarWidget: FC<Props> = ({ data = defaultData, loader }) => {
  useEffect(() => {
    loader.push();
    // GitHubCalendar(".calendar", data.username, {
    //   responsive: false,
    //   global_stats: data.showSummary,
    // }).finally(() => {
    //   loader.pop();
    // });
  }, [data.username, data.showSummary]);
  const explicitTheme: ThemeInput = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    // dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  };
    
  const minimalTheme: ThemeInput = {
    light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
    // for `dark` the default theme will be used
  };
  
  return (
    <div className="GitHub">
      {/* <a
        // href={"https://github.com/" + data.username}
        rel="noopener noreferrer"
        className="calendar"
      /> */}
       <GitHubCalendar theme={explicitTheme} style={{backgroundColor:'rgba(0,0,0,0.05)',borderRadius:15,padding:16}} username={data.username} blockMargin={8} blockSize={16} blockRadius={6} weekStart={1} hideColorLegend={true}/>
    </div>
  );
};

export default GitHubCalendarWidget;
