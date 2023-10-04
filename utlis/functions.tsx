export const handleJoinChannel = (onJoinChannel: any, tokenId: any) => {
  if (onJoinChannel && tokenId) {
    onJoinChannel(tokenId);
  }
};
