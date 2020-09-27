/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  // Your code here
  return channel.name
}

/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  // Your code here
  return channel.videos.length
}

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  // Your code here
  if ( channel.videos[0].title== videoTitle){
    return true
  }else{
    return false
  }
}

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  // Your code here


  var first = channels.find(myFunction);

function myFunction(value, index, channels) {
  if (channels[index].name==channelName)
  return channels[index];
}
return  first
  
  }

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  // Your code here

  var first = channels.find(myFunction);

  function myFunction(channel) {
    return channel.videos.some(myFunction2)}

  function myFunction2(channel) {
      return channel.title===videoTitle}

return first 
 
}


/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  // Your code here
 
  var search = channels.filter(myFunction);

function myFunction(value, index, array) {
  return  (channels[index].name.includes(query) || channels[index].description.includes(query))
  
}  

return search
}

/**************************************************************
 * totalVideosDuration(channel):
 * - receives a channel object
 * - returns the total duration of all the videos in this channel
 *
 * BONUS: use iteration method `.reduce()`
 ****************************************************************/
function totalVideosDuration(channel) {
  
  return  channel.videos.reduce(
    (totalDuration, video) => totalDuration + video.duration,
    0
  );

}

/**************************************************************
 * channelWithMostContent(channels):
 * - receives an array of channel objects
 * - returns the channel with the highest total video duration
 *
 * Hint: use the `totalVideosDuration()` function
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function channelWithMostContent(channels) {
  // Your code here
 
  channels.sort(function(channel){return totalVideosDuration(channel)})
  return channels[0]
}

/**************************************************************
 * longestChannelName(channels):
 * - receives an array of channel objects
 * - returns the channel with the longest name
 *
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function longestChannelName(channels) {
  // Your code here
  channels.sort(function(channe1l , channe12){return channe12.name.length-channe1l.name.length}) //sorted in descending order
  return channels[0] //channel with the longest name will be in first index

}

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
  totalVideosDuration,
  channelWithMostContent,
  longestChannelName,
};
//getChannelName()