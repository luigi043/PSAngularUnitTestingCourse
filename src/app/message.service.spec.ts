import { MessageService } from "./message.service"

describe('MessageService', () => {
    let service: MessageService
    beforeEach(() => {
    })
    it ('should have no messages to start', ()=>{
        expect(service.messages.length).toBe(0);
    })
    it ('should have no messages to start', ()=>{
        
        service = new MessageService();
        service.add('messagel');
        expect(service.messages.length).toBe(1);
    })
})