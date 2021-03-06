import { html } from 'lit-element';

export default html`
<style>
  .only-large-screen { display:none; }
  .endpoint-head .path{
    display: flex;
    font-family:var(--font-mono);
    font-size: var(--font-size-small);
    align-items: center;
    overflow-wrap: break-word;
    word-break: break-all;
  }

  .endpoint-head .descr{
    font-size: var(--font-size-small);
    color:var(--light-fg);
    font-weight:400;
    align-items: center;
    overflow-wrap: break-word;
    word-break: break-all;
    display:none;
  }

  .m-endpoint.expanded{margin-bottom:16px; }
  .m-endpoint > .endpoint-head{
    border-width:1px 1px 1px 5px;
    border-style:solid;
    border-color:transparent;
    border-top-color:var(--light-border-color);
    display:flex;
    padding:6px 16px;
    align-items: center;
    cursor: pointer;
  }
  .m-endpoint > .endpoint-head.put:hover,
  .m-endpoint > .endpoint-head.put.expanded{
    border-color:var(--orange); 
    background-color:var(--light-orange); 
  }
  .m-endpoint > .endpoint-head.post:hover,
  .m-endpoint > .endpoint-head.post.expanded{
    border-color:var(--green); 
    background-color:var(--light-green); 
  }
  .m-endpoint > .endpoint-head.get:hover,
  .m-endpoint > .endpoint-head.get.expanded{
    border-color:var(--blue); 
    background-color:var(--light-blue); 
  }
  .m-endpoint > .endpoint-head.delete:hover,
  .m-endpoint > .endpoint-head.delete.expanded{
    border-color:var(--red); 
    background-color:var(--light-red); 
  }
  .m-endpoint > .endpoint-head.patch:hover,
  .m-endpoint > .endpoint-head.patch.expanded{
    border-color:var(--yellow); 
    background-color:var(--light-yellow); 
  }

  .m-endpoint > .endpoint-head.deprecated:hover,
  .m-endpoint > .endpoint-head.deprecated.expanded {
    border-color:var(--border-color); 
    filter:opacity(0.6);
  }

  .m-endpoint .endpoint-body {
    flex-wrap:wrap;
    padding:16px 0px 0 0px;
    border-width:0px 1px 1px 5px;
    border-style:solid;
    box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.15);
  }
  .m-endpoint .endpoint-body.delete{ border-color:var(--red); }
  .m-endpoint .endpoint-body.patch{ border-color:var(--yellow); }
  .m-endpoint .endpoint-body.put{ border-color:var(--orange); }
  .m-endpoint .endpoint-body.post{border-color:var(--green);}
  .m-endpoint .endpoint-body.get{ border-color:var(--blue); }
  .m-endpoint .endpoint-body.deprecated{ 
    border-color:var(--border-color);
    filter:opacity(0.6);
  }

  .endpoint-head .deprecated{
    color: var(--light-fg);
    filter:opacity(0.6);
  }

  .summary{
    padding:8px 8px;
  }
  .summary .title{
    font-size:calc(var(--title-font-size) + 2px);
    margin-bottom: 6px;
    word-break: break-all;
  }

  .method{
    padding:2px 5px;
    vertical-align: middle;
    height: 20px;
    line-height: 20px;
    min-width: 48px;
    border-radius: 2px;
    display:inline-block;
    font-size:var(--font-size-small);
    text-align: center;
    font-weight: bold;
    text-transform:uppercase;
    margin-right:5px;
  }
  .method.delete{ border: 2px solid var(--red);}
  .method.patch{ border: 2px solid var(--yellow); }
  .method.put{ border: 2px solid var(--orange); }
  .method.post{ border: 2px solid var(--green); }
  .method.get{ border: 2px solid var(--blue); }
  .method.get.deprecated{ border: 2px solid var(--border-color); }
  
  .req-resp-container{
    display: flex;
    margin-top:16px;
    align-items: stretch;
    flex-wrap: wrap;
    flex-direction: column;
    border-top:1px solid var(--light-border-color);
  }
  .request,
  .response{
    flex:1; 
    min-height:100px;
    padding:16px 8px;
    overflow:hidden;
  }
  .request{
    border-width:0 0 1px 0;
    border-style:dashed;
  }
  .patch .request{ 
    border-color:var(--yellow); 
  }
  .put .request{ 
    border-color:var(--orange); 
  }
  .post .request{ 
    border-color:var(--green); 
  }
  .get .request{ 
    border-color:var(--blue); 
  }
  .delete .request{ 
    border-color:var(--red); 
  }


  @media only screen and (min-width: 768px) {
    .only-large-screen { display:block; }
    .endpoint-head .path{
      font-size: var(--font-size-regular);
      min-width:400px;
    }
    .endpoint-head .descr{
      display: flex;
    }
    .endpoint-head .m-markdown-small,
    .descr .m-markdown-small{
      display:block;
    }
    .req-resp-container{
      flex-direction: var(--layout, row);
    }
    .request{
      border-width:0 1px 0 0;
      padding:16px 24px;
    }
    .response{
      padding:16px 24px;
    } 
    .summary{
      padding:8px 24px;
    }
  }
</style>`;
