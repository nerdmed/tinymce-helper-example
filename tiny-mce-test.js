if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    settings: function(){
      return {
        toolbar: false,
        menubar: false,
        nowrap:true
      }
    },
    reactiveTitle: function(){
      return Session.get('title');
    },
    saveTitle: function(){
      return function(newTitle){
        Session.setPersistent('title', newTitle);
      }
    },
    bigHtmlString: function(){
      return Session.get('htmlString');
    },
    saveHtmlString: function(){
      return function(newHtml){
        Session.setPersistent('htmlString', newHtml);
      }
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Meteor.startup(function(){
    if(!Session.get('title'))  Session.setPersistent('title', 'Click me to Edit');
    if(!Session.get('htmlString')) Session.setPersistent('htmlString', bigHtmlString);
  })

  var bigHtmlString = "\n\t  <p>\n\t    This is an editable div element.\n\t  </p>\n\t  <p>\n\t    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt est ac dolor condimentum vitae laoreet ante accumsan. Nullam tincidunt tincidunt ante tempus commodo. Duis rutrum, magna non lacinia tincidunt, risus lacus tempus ipsum, sit amet euismod justo metus ut metus. Donec feugiat urna non leo laoreet in tincidunt lectus gravida. Sed semper ante sed dui consectetur eget commodo eros imperdiet. Mauris magna diam, scelerisque at ornare vel, dignissim ac sem. Fusce id congue lacus. Duis sit amet tellus erat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus mattis facilisis pretium. In in nibh eu urna ornare semper. Sed imperdiet felis vitae nibh sagittis eu pulvinar metus facilisis. Sed dolor orci, aliquet sagittis auctor id, faucibus at justo.\n\t  </p>\n\t  <p>\n\t    Vestibulum vestibulum velit nec magna lobortis elementum. Ut egestas ultrices tincidunt. Sed vestibulum mi vitae dui interdum eget rhoncus neque faucibus. Ut nec leo tellus. Nunc in metus sit amet purus bibendum dignissim pulvinar quis erat. Quisque vel ultricies nisi. Vestibulum eu ante risus. In ultrices dignissim massa, vel luctus dui consequat quis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\t  </p>\n\t  <p>\n\t    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui nulla, venenatis at porttitor nec, sagittis et urna. Nulla facilisi. Integer bibendum porta urna porta suscipit. In condimentum quam quis justo accumsan molestie. Fusce accumsan vulputate mattis. Sed pharetra volutpat erat at convallis. Etiam tempus, est ac tincidunt scelerisque, mi elit pretium nulla, sit amet viverra nisl enim id lorem. Suspendisse ut enim ullamcorper tellus eleifend sagittis. Aenean mollis turpis eu nisl viverra laoreet. Mauris ante purus, tempor ut viverra eu, vestibulum eget tellus. Morbi vitae dolor tellus. Mauris sodales rutrum nunc, a imperdiet augue egestas vel. Nulla facilisi. Nulla venenatis tristique nisi ut blandit. Phasellus suscipit arcu adipiscing velit posuere nec lacinia urna mattis.\n\t  </p>\n\t  <p>\n\t    Nulla ullamcorper magna sit amet leo porta blandit. Aliquam sed nulla ac arcu vehicula feugiat. Fusce eget accumsan dui. Vestibulum vel leo tellus. Sed dignissim justo in nunc interdum tempor vehicula neque egestas. Fusce lacinia turpis sit amet leo consequat laoreet. Cras nec erat ac purus volutpat consequat. Vestibulum iaculis tincidunt purus eget blandit. Cras consectetur tellus libero. Vestibulum eros orci, volutpat vitae lobortis sit amet, porta quis felis. In a lacus ac neque luctus mollis. Nulla elementum nunc ac ante porttitor id venenatis augue venenatis. In aliquam magna non dolor convallis consequat.\n\t  </p>\n\t";
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
