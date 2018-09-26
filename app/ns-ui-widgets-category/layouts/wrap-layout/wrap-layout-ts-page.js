"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = require("tns-core-modules/ui/button");
var wrap_layout_1 = require("tns-core-modules/ui/layouts/wrap-layout");
function onNavigatingTo(args) {
    var page = args.object;
    var myWrap = new wrap_layout_1.WrapLayout();
    var button1 = new button_1.Button();
    button1.backgroundColor = "#0099CC";
    button1.width = 150;
    button1.height = 100;
    button1.margin = 4;
    var button2 = new button_1.Button();
    button2.backgroundColor = "#FFFF66";
    button2.width = 100;
    button2.height = 150;
    button2.margin = 4;
    var button3 = new button_1.Button();
    button3.backgroundColor = "#8C489F";
    button3.width = 200;
    button3.height = 120;
    button3.margin = 4;
    var button4 = new button_1.Button();
    button4.backgroundColor = "#CCFFFF";
    button4.width = 100;
    button4.height = 50;
    button4.margin = 4;
    var button5 = new button_1.Button();
    button5.backgroundColor = "#AA0078";
    button5.width = 250;
    button5.height = 100;
    button5.margin = 4;
    myWrap.addChild(button1);
    myWrap.addChild(button2);
    myWrap.addChild(button3);
    myWrap.addChild(button4);
    myWrap.addChild(button5);
    page.content = myWrap;
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcC1sYXlvdXQtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndyYXAtbGF5b3V0LXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxREFBb0Q7QUFHcEQsdUVBQXFFO0FBR3JFLHdCQUErQixJQUFlO0lBQzFDLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFL0IsSUFBTSxNQUFNLEdBQUcsSUFBSSx3QkFBVSxFQUFFLENBQUM7SUFFaEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQUM3QixPQUFPLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNwQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNwQixPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNyQixPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVuQixJQUFNLE9BQU8sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRW5CLElBQU0sT0FBTyxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDN0IsT0FBTyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDcEMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDcEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDckIsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFFbkIsSUFBTSxPQUFPLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQUM3QixPQUFPLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNwQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNwQixPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNwQixPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVuQixJQUFNLE9BQU8sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBSW5CLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUd6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUMxQixDQUFDO0FBN0NELHdDQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuLy8gPj4gd3JhcC1sYXlvdXQtaW1wb3J0LXRzXG5pbXBvcnQgeyBXcmFwTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiO1xuLy8gPDwgd3JhcC1sYXlvdXQtaW1wb3J0LXRzXG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgLy8gPj4gd3JhcC1sYXlvdXQtY29kZS1iZWhpbmQtdHNcbiAgICBjb25zdCBteVdyYXAgPSBuZXcgV3JhcExheW91dCgpO1xuICAgIC8vID4+IChoaWRlKVxuICAgIGNvbnN0IGJ1dHRvbjEgPSBuZXcgQnV0dG9uKCk7XG4gICAgYnV0dG9uMS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDk5Q0NcIjtcbiAgICBidXR0b24xLndpZHRoID0gMTUwO1xuICAgIGJ1dHRvbjEuaGVpZ2h0ID0gMTAwO1xuICAgIGJ1dHRvbjEubWFyZ2luID0gNDtcblxuICAgIGNvbnN0IGJ1dHRvbjIgPSBuZXcgQnV0dG9uKCk7XG4gICAgYnV0dG9uMi5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNGRkZGNjZcIjtcbiAgICBidXR0b24yLndpZHRoID0gMTAwO1xuICAgIGJ1dHRvbjIuaGVpZ2h0ID0gMTUwO1xuICAgIGJ1dHRvbjIubWFyZ2luID0gNDtcblxuICAgIGNvbnN0IGJ1dHRvbjMgPSBuZXcgQnV0dG9uKCk7XG4gICAgYnV0dG9uMy5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM4QzQ4OUZcIjtcbiAgICBidXR0b24zLndpZHRoID0gMjAwO1xuICAgIGJ1dHRvbjMuaGVpZ2h0ID0gMTIwO1xuICAgIGJ1dHRvbjMubWFyZ2luID0gNDtcblxuICAgIGNvbnN0IGJ1dHRvbjQgPSBuZXcgQnV0dG9uKCk7XG4gICAgYnV0dG9uNC5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNDQ0ZGRkZcIjtcbiAgICBidXR0b240LndpZHRoID0gMTAwO1xuICAgIGJ1dHRvbjQuaGVpZ2h0ID0gNTA7XG4gICAgYnV0dG9uNC5tYXJnaW4gPSA0O1xuXG4gICAgY29uc3QgYnV0dG9uNSA9IG5ldyBCdXR0b24oKTtcbiAgICBidXR0b241LmJhY2tncm91bmRDb2xvciA9IFwiI0FBMDA3OFwiO1xuICAgIGJ1dHRvbjUud2lkdGggPSAyNTA7XG4gICAgYnV0dG9uNS5oZWlnaHQgPSAxMDA7XG4gICAgYnV0dG9uNS5tYXJnaW4gPSA0O1xuICAgIC8vIDw8IChoaWRlKVxuXG4gICAgLy8gQWRkIHZpZXdzIHRvIHN0YWNrIGxheW91dFxuICAgIG15V3JhcC5hZGRDaGlsZChidXR0b24xKTtcbiAgICBteVdyYXAuYWRkQ2hpbGQoYnV0dG9uMik7XG4gICAgbXlXcmFwLmFkZENoaWxkKGJ1dHRvbjMpO1xuICAgIG15V3JhcC5hZGRDaGlsZChidXR0b240KTtcbiAgICBteVdyYXAuYWRkQ2hpbGQoYnV0dG9uNSk7XG4gICAgLy8gPDwgd3JhcC1sYXlvdXQtY29kZS1iZWhpbmQtdHNcblxuICAgIHBhZ2UuY29udGVudCA9IG15V3JhcDtcbn1cbiJdfQ==