export type SentRequestsResponse = {
 id: string;
 senderId: string;
 sender: null;
 receiverId: string;
 receiver: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        bio: string;
        passwordHash: string;
        passwordSalt: string;
        refreshToken: string;
        refreshTokenExpiryTime: string;
        isRevoked: boolean;
        createdAt: string;
        updatedAt: string;
    };
 status: number;
 createdAt: string;
 updatedAt: string;
}

export type IncomingRequestsResponse = {
 id: string;
 senderId: string;
 sender: {
 id: string;
 email: string;
 firstName: string;
 lastName: string;
 bio: string;
 passwordHash: string;
 passwordSalt: string;
 refreshToken: string;
 refreshTokenExpiryTime: string;
 isRevoked: boolean;
 createdAt: string;
 updatedAt: string;
 };
 receiverId: string;
 receiver: null;
 status: number;
 createdAt: string;
 updatedAt: string;
}