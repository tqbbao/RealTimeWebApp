import { Injectable } from '@nestjs/common';

@Injectable()
export class ShortPollingService {
    
    findAll() {
        return 'This action returns all short-polling';
    }
}
