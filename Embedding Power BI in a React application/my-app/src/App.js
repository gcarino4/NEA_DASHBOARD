import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'f303e0a4-b412-435e-a3b8-c838a5e32583',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f303e0a4-b412-435e-a3b8-c838a5e32583&groupId=2ef4228c-4642-4502-ab58-1e1c7a9a401a&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1DLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZGI1NTkwNzMtNWRjYS00N2M4LTg1MzAtZTM3ZWY1Nzg2YmJiLyIsImlhdCI6MTcxNTkzMjYzNywibmJmIjoxNzE1OTMyNjM3LCJleHAiOjE3MTU5MzY3NDQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFiTUNCSEx0RTNTS1d2THJ6dDI0U2dDdEdZUTRSNkZWUjg0dTI5bm9MYmYzejdvZjRJQW1uRWtyWk41VWJydm9VIiwiYW1yIjpbInB3ZCIsInJzYSJdLCJhcHBpZCI6IjIzZDhmNmJkLTFlYjAtNGNjMi1hMDhjLTdiZjUyNWM2N2JjZCIsImFwcGlkYWNyIjoiMCIsImRldmljZWlkIjoiOTQzMjcwYjMtMDVhNy00NTEwLThjMDUtZmVhOTAxNGFhODEyIiwiZmFtaWx5X25hbWUiOiJDYXJpbm8iLCJnaXZlbl9uYW1lIjoiTmVpbCBHYWJyaWVsIiwiaXBhZGRyIjoiMTgwLjIzMi44Mi4xMTQiLCJuYW1lIjoiTmVpbCBHYWJyaWVsIENhcmnDsW8iLCJvaWQiOiJkNTI2ZGNkOC00YjE3LTQyOWItOGQ0MS1lMGFlN2QwY2JkYmMiLCJwdWlkIjoiMTAwMzIwMDM0QUNDNUUxRCIsInJoIjoiMC5BWEFBYzVCVjI4cGR5RWVGTU9OLTlYaHJ1d2tBQUFBQUFBQUF3QUFBQUFBQUFBQndBUEUuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUGlwZWxpbmUuRGVwbG95IFBpcGVsaW5lLlJlYWQuQWxsIFBpcGVsaW5lLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlVvRllTSldOQ01WanRLVVlObzIzT2x0LXhENW1TRGxRUUkwMG1rY2l0YzQiLCJ0aWQiOiJkYjU1OTA3My01ZGNhLTQ3YzgtODUzMC1lMzdlZjU3ODZiYmIiLCJ1bmlxdWVfbmFtZSI6Im5jY2FyaW5vQG9uZWRvYy5waCIsInVwbiI6Im5jY2FyaW5vQG9uZWRvYy5waCIsInV0aSI6IjkzWFRjS1lia1VHUXdZZmVtYWRaQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.eoaPwwyeE99B9OUL8tf8rFoa08sJfUpID_T-cqUM2wJVVYW3jincV-H8nEKdKVl56CZZZisrCRX45h4Q6aD9uqLTxfu2iyyC-NR5yVq9ii2ArmHu6PI9J-p7noi8u5HoUOKHycXe4gxehJ_BP8QL9EOGeQNkiVZw1oBwl7pj3Y0tYHxu7KXzcVSE03u5mbEpxApwQ4hz-oK0C63Ikb2z-iSG5K6cbdVSr2Tfq-L2tyctsgNiBBTUtHCo6BK3jI4_khlT9xlg99jWInl0eWpQ32z-ElUeaUnJ2dXGA2PnVE08O4Dh5DDhup5iBa1CcAijluzBHxXD4-VNAXwugdJ9Iw',
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
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          
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