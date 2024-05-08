import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import React, { useEffect } from 'react';

function App() {
  const embedConfig={
    type: 'report',   // Supported types: report, dashboard, tile, visual and qna
    id: 'f303e0a4-b412-435e-a3b8-c838a5e32583',
    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f303e0a4-b412-435e-a3b8-c838a5e32583&groupId=2ef4228c-4642-4502-ab58-1e1c7a9a401a&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1DLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZGI1NTkwNzMtNWRjYS00N2M4LTg1MzAtZTM3ZWY1Nzg2YmJiLyIsImlhdCI6MTcxNTE0MDg2OCwibmJmIjoxNzE1MTQwODY4LCJleHAiOjE3MTUxNDUyNjIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFRUzlhWTBVaEttb0t1Q3hHcWhuRHJMRm4zL3o1T1Q4ZWNNYXZ1MStSQU1DZmpNcDUrVkI3SmlBQVMwVGd2UkpEIiwiYW1yIjpbInB3ZCIsInJzYSJdLCJhcHBpZCI6IjIzZDhmNmJkLTFlYjAtNGNjMi1hMDhjLTdiZjUyNWM2N2JjZCIsImFwcGlkYWNyIjoiMCIsImRldmljZWlkIjoiOTQzMjcwYjMtMDVhNy00NTEwLThjMDUtZmVhOTAxNGFhODEyIiwiZmFtaWx5X25hbWUiOiJDYXJpbm8iLCJnaXZlbl9uYW1lIjoiTmVpbCBHYWJyaWVsIiwiaXBhZGRyIjoiMTIwLjI4LjE2Ni4yMTEiLCJuYW1lIjoiTmVpbCBHYWJyaWVsIENhcmnDsW8iLCJvaWQiOiJkNTI2ZGNkOC00YjE3LTQyOWItOGQ0MS1lMGFlN2QwY2JkYmMiLCJwdWlkIjoiMTAwMzIwMDM0QUNDNUUxRCIsInJoIjoiMC5BWEFBYzVCVjI4cGR5RWVGTU9OLTlYaHJ1d2tBQUFBQUFBQUF3QUFBQUFBQUFBQndBUEUuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUGlwZWxpbmUuRGVwbG95IFBpcGVsaW5lLlJlYWQuQWxsIFBpcGVsaW5lLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlVvRllTSldOQ01WanRLVVlObzIzT2x0LXhENW1TRGxRUUkwMG1rY2l0YzQiLCJ0aWQiOiJkYjU1OTA3My01ZGNhLTQ3YzgtODUzMC1lMzdlZjU3ODZiYmIiLCJ1bmlxdWVfbmFtZSI6Im5jY2FyaW5vQG9uZWRvYy5waCIsInVwbiI6Im5jY2FyaW5vQG9uZWRvYy5waCIsInV0aSI6ImtzM3pxRUkwUUVPSklBXy1idkZQQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.WAcMcLYmlJhXbJmJItq7wVgetH-PqY1ruOUqxNjMf4qLl3f2WtUlc01cPaBk1kVvOSwWlqeqHxSzLO2TtnIpG-pL8DL6gR5f6LHEWzxasYHSvIt3i0pAJ2Fuu4SFItUMD1ChW00FNVWPdWwlhQulOai4JqLX7if9FnAfuFMv5c5FvBnPASiDRE7SfX7s_eDeF4e4Iw9gnAyLQkjwp5aZvV21_Mq_SFBvSt8mmg7_ywIS9cJIT0t0glOXSjZZazN5m2lkcQ32PbOutr9hUZK9NO7gSHrs6W2y6Oe37K7CihWR2kOqi1OVKTEYticw8RTPaLzrgeqoedSeiWvID2zTbA',
    tokenType: models.TokenType.Aad,
    settings: {
      navContentPaneEnabled: false, // Hide the navigation pane
      filterPaneEnabled: false, // Hide the filter pane
      panes: {
        filters: {
          expanded: false,
          visible: false // Hide the filters pane
        }
      },
      layoutType: models.LayoutType.Custom,
        customLayout: {
            displayOption: models.DisplayOption.FitToPage,
            // pageSize: {
            //   type: models.PageSizeType.Custom,
            //   width: 16,
            //   height: 9
            // }
        },
      bars: {
        statusBar: {
          visible: false // Hide the status bar
        },
        pageNavigation: {
          visible: false // Hide the page navigation bar
        }
      },
      fullscreen: true // Automatically make the report full-screen
    }
  };

  const eventHandlers = new Map([
    ['loaded', function () { console.log('Report loaded'); }],
    ['rendered', function () { console.log('Report rendered'); }],
    ['error', function (event) { console.log(event.detail); }]
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <PowerBIEmbed
          embedConfig={embedConfig}
          eventHandlers={eventHandlers}
          cssClassName={"Embed-container"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
