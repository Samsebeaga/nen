const { Telegraf } = require('telegraf'); 
 
const users = []; 
 
class User { 
  constructor(id) { 
 
    this.id = id 
    this.todos = [] 
 
  } 
}  
const bot = new Telegraf('6017554183:AAF376X9leUE0ZRZ0jQvscIGPRKL8kfKXTU') 
let currentUser = null; 
bot.command('start', ctx => { 
 
  if (users.length != 0) { 
    let userExists = false 
    for (let i = 0; i < users.length; i++) { 
      if (users[i].id == ctx.from.id) { 
        currentUser = users[i] 
        userExists = true 
        break 
      } 
    } 
    if (!userExists) { 
      currentUser = new User(ctx.from.id) 
      users.push(currentUser) 
    } 
  } else { 
    currentUser = new User(ctx.from.id) 
    users.push(currentUser) 
  } 
 
ctx.reply(`Hi, ${ctx.from.first_name}, you can choose one of these:\n\n<b>/admins - I'll give contacts of my developers\n/start - to see this message again</b>`, { 
  parse_mode: 'HTML', 
  reply_markup: { 
    one_time_keyboard: true, 
    resize_keyboard: true 
  } 
}); 
 }); 
 bot.command('admins', ctx => { 
    ctx.reply("Deveoper:<b>\n\nlaevskayaya.</b>", {parse_mode: 'HTML'}) 
 }); 

  bot.launch();
  