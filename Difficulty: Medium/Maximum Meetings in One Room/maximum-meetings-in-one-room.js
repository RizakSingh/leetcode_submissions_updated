class Solution {
    maxMeetings(s, f) {
        
        let meetings = [];
        
        for(let i = 0; i < s.length; i++) {
            meetings.push({
                start: s[i],
                end: f[i],
                index: i + 1
            });
        }
        
        meetings.sort((a, b) => {
            if(a.end === b.end) {
                return a.index - b.index;
            }
            return a.end - b.end;
        });
        
        let ans = [];
        
        ans.push(meetings[0].index);
        
        let lastEnd = meetings[0].end;
        
        for(let i = 1; i < meetings.length; i++) {
            
            if(meetings[i].start > lastEnd) {
                
                ans.push(meetings[i].index);
                
                lastEnd = meetings[i].end;
            }
        }
        
        ans.sort((a,b) => a-b);
        
        return ans;
    }
}